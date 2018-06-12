require("dotenv").config()
const cors = require("cors")
const express = require("express")
const massive = require('massive')
const { json } = require("body-parser")
const ctrl = require("./controllers/mainController")

const PORT = 3055

const app = express()
app.use(express.static(`${__dirname}/../build`))
app.use(cors())
app.use(json())

const massiveConnection = massive(process.env.connectionString)
  .then(db => app.set("db", db))
  .catch(console.log)

const path = require("path")
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/../build/index.html"))
})

app.listen(PORT, console.log(`Now tuned into ${PORT} FM`))
