const {Router} = require('express')
const homePageRouter = Router()

module.exports =  homePageRouter.get('/latest-news', async (req, res)=>{
  res.send({
    "title": "Latest News"
  })
})
module.exports =  homePageRouter.get('/top-news', async (req, res)=>{
  res.send({
    "title": "Top News"
  })
})
module.exports =  homePageRouter.get('/hot-week-news', async (req, res)=>{
  res.send({
    "title": "Hot week News"
  })
})
module.exports =  homePageRouter.get('/more-news', async (req, res)=>{
  res.send({
    "title": "More News"
  })
})
module.exports =  homePageRouter.get('/popular-news', async (req, res)=>{
  res.send({
    "title": "Popular News"
  })
})
module.exports =  homePageRouter.get('/slider-news', async (req, res)=>{
  res.send({
    "title": "Popular News"
  })
})

module.exports = homePageRouter
