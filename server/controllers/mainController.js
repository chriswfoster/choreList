const getChildren = (req, res) => {
  const dbInstance = req.app.get("db")
  console.log("hi")
  dbInstance.getChildren().then(response => res.status(200).json(response))
}

const getChores = (req, res) => {
    const dbInstance = req.app.get('db')

    dbInstance.getChores().then(response => res.status(200).json(response))
}

const addChore = (req, res) => {
  const dbInstance = req.app.get('db')
const {name, points} = req.body
  dbInstance.addChore(name, points)
  .then(response => dbInstance.getChores().then(response => res.status(200).json(response)))
}

module.exports = {
  getChildren,
  getChores,
  addChore
}
