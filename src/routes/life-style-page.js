const {Router} = require('express')
const lifeStylePageRouter = Router()
lifeStylePageRouter.get('/life-style', async (req, res)=>{
  res.send('Life style')
})

module.exports = lifeStylePageRouter
