const {Router} = require('express')
const businessPageRouter = Router()

businessPageRouter.get('/business', async (req, res)=>{
  res.send('Business Page')
})

module.exports = businessPageRouter
