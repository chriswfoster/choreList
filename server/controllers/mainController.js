const getChildren = (req, res) => {
  const dbInstance = req.app.get("db")
  dbInstance.getChildren().then(response => res.status(200).json(response))
}

const getChores = app => {
  const dbInstance = app.get("db")
  console.log(app)
  dbInstance
    .getChores()
    .then(response => io.sockets.emit("getChores", response))
}

const addChore = (req, res) => {
  const dbInstance = req.app.get("db")
  const io = req.app.get("io")
  const { name, points } = req.body

}

// const updateKid = (req, res) => {
//   const dbInstance = req.app.get("db")
//   const io = req.app.get("io")
//   const { chore, kid } = req.body
//   console.log("happens")
//   dbInstance
//     .updateKid(chore, kid)
//     .then(response => res.status(200) && io.sockets.emit("getChores", response))
  // .then((response) => res.status(200))
  // .then(() => dbInstance.getChores().then(response => io.sockets.emit("getChores", response)))
// }

module.exports = {
  getChildren,
  getChores,
  addChore,
  // updateKid
}
