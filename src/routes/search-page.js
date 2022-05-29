const {Router} = require('express')
const searchPageRouter = Router()

searchPageRouter.get('/search', async (req, res)=>{
  res.send('Search Page')
})

module.exports = searchPageRouter
