import React, { Component } from "react"
import router from "../router"
import HTML5Backend from "react-dnd-html5-backend"
import { DragDropContext } from "react-dnd"

import "./App.css"

class App extends Component {


  render() {
    return <div className="App">{router}</div>
  }
}

export default DragDropContext(HTML5Backend)(App)

