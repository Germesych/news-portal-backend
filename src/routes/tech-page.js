const {Router} = require('express')
const techPageRouter = Router()

techPageRouter.get('/tech', async (req, res)=>{
  res.send('Tech Page')
})

module.exports = techPageRouter
