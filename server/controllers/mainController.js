
const getChildren = (req, res) => {
  const dbInstance = req.app.get("db")
  dbInstance.getChildren().then(response => res.status(200).json(response))
}

const getChores = (app) => {
    const dbInstance = app.get('db')
console.log(app)
    dbInstance.getChores().then(response => io.sockets.emit("getChores", response))
}

const addChore = (req, res) => {
  const dbInstance = req.app.get('db')
const {name, points} = req.body
  dbInstance.addChore(name, points)
  .then(() => dbInstance.getChores().then(response => io.sockets.emit("getChores", response)))
}

module.exports = {
  getChildren,
  getChores,
  addChore
}
