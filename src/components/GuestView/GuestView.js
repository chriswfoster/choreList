import React, { Component } from "react"
import ActiveChores from "./childComponents/ActiveChores"
import ChildColumns from "./childComponents/ChildColumns"

import "./guestview.css"

class GuestView extends Component {
  render() {
    return (
      <div className="rowFlexUncentered">
        <ActiveChores />

        <ChildColumns />
      </div>
    )
  }
}
export default GuestView
