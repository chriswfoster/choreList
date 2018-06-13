const getChildren = (req, res) => {
  const dbInstance = req.app.get("db")
  console.log("hi")
  dbInstance.getChildren().then(response => res.status(200).json(response))
}

module.exports = {
  getChildren
}
