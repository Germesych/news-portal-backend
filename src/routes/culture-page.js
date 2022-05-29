const {Router} = require('express')
const culturePageRouter = Router()

culturePageRouter.get('/culture', async (req, res)=>{
  res.send('Culture Page')
})

module.exports = culturePageRouter
