import React, { Component } from "react"
import ActiveChores from "./childComponents/ActiveChores"
import ChildColumns from './childComponents/ChildColumns'

class GuestView extends Component {
  render() {
    return (
      <div>
        <ActiveChores />
        <div>
            <ChildColumns />
            </div>
      </div>
    )
  }
}
export default GuestView
