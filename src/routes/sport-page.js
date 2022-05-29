const {Router} = require('express')
const sportPageRouter = Router()

sportPageRouter.get('/sport', async (req, res)=>{
  res.send('Sport Page')
})

module.exports = sportPageRouter
