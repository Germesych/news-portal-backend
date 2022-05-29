const {Router} = require('express')
const politicsPageRouter = Router()

politicsPageRouter.get('/politics', async (req, res)=>{
  res.send('Politics Page')
})

module.exports = politicsPageRouter
