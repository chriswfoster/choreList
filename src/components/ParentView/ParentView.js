import React, { Component } from "react"
import PActiveChores from "./childComponents/PActiveChores/PActiveChores"
import PChildColumns from "./childComponents/PChildColumns"

import "./parentview.css"

class ParentView extends Component {
  render() {
    return (
      <div className="rowFlexUncentered">
        <PActiveChores />
        <PChildColumns />
      </div>
    )
  }
}
export default ParentView
