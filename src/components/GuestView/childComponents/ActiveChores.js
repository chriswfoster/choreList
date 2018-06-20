import React, { Component } from "react"
import { connect } from "react-redux"
import { updateChores } from "../../../ducks/reducer"

import socketIOClient from "socket.io-client"


class ActiveChores extends Component {
constructor(){
  super()
  this.state = {
    endpoint: "/"
  }
  this.socket = socketIOClient("/")
}

    componentDidMount() {
      this.socket.on("getChores", data => {
         this.props.updateChores(data)
      })
    }
  

  render() {
    const choreList = this.props.chores
      .filter(chore => chore.chore_holder === null)
      .map((chore, i) => <p className="itemFont">{chore.chore_name}</p>)
    return (
      <div className="activeChoresPrimary">
        <p className="titleFont">Active Chores:</p>
        <div className="columnFlex">{choreList}</div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  { updateChores }
)(ActiveChores)
