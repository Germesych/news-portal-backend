const {Router} = require('express')
const foodsPageRouter = Router()

foodsPageRouter.get('/foods', async (req, res)=>{
  res.send('Foods Page')
})

module.exports = foodsPageRouter
