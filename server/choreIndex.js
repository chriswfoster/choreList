require("dotenv").config()
const http = require("http")
const cors = require("cors")
const express = require("express")
const massive = require("massive")
const { json } = require("body-parser")
const socketIo = require("socket.io")
const ctrl = require("./controllers/mainController")

const PORT = 3055

const app = express()
app.use(express.static(`${__dirname}/../build`))
app.use(cors())
app.use(json())

const server = http.createServer(app)
const io = socketIo(server)

const massiveConnection = massive(process.env.connectionString)
  .then(db => app.set("db", db))
  .catch(console.log)

app.set("io", io)

io.on("connection", socket => {
  console.log("A user has connected to the system.")
  initialEmit(socket)

  socket.on("updateKid", obj => {
    app
      .get("db")
      .updateKid(obj.chore, obj.kid)
      .then(response => io.sockets.emit("getChores", response))
  })

  socket.on("disconnect", () => {
    console.log("User disconnected")
  })
})

const initialEmit = async socket => {
  try {
    app
      .get("db")
      .getChores()
      .then(response => io.sockets.emit("getChores", response))
  } catch (error) {
    console.error(`Error: ${error.code}`)
  }
}

app.get("/api/getChildren", ctrl.getChildren)
app.get("/api/getChores", ctrl.getChores)
app.post("/api/addChore", ctrl.addChore)
// app.put("/api/updateKid", ctrl.updateKid)

const path = require("path")
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/../build/index.html"))
})

server.listen(PORT, console.log(`Now tuned into ${PORT} FM`))
