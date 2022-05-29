const express = require('express');
const homePageRouter = require("./routes/home-page");
const techPage = require("./routes/tech-page");
const culturePage = require("./routes/culture-page");
const foodsPage = require("./routes/foods-page");
const lifeStylePage = require("./routes/life-style-page");
const politicsPage = require("./routes/politics-page");
const sportPage = require("./routes/sport-page");
const searchPage = require("./routes/search-page");

const app = express()

const PORT = process.env.PORT || 3080

app.use('/api/home', homePageRouter)
app.use('/api/blog', techPage)
app.use('/api/blog', culturePage)
app.use('/api/blog', foodsPage)
app.use('/api/blog', lifeStylePage)
app.use('/api/blog', politicsPage)
app.use('/api/blog', sportPage)
app.use('/api/blog', searchPage)


app.listen(PORT, ()=>{
  console.log('Server it work...')
  console.log(`http://localhost:${PORT}`)
})
