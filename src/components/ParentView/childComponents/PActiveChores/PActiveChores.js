import React, { Component } from "react"
import { updateChores } from "../../../../ducks/reducer"
import { connect } from "react-redux"
import SelectForm from "./SelectForm"
import axios from "axios"

class PActiveChores extends Component {
  constructor() {
    super()
    this.state = {
      inputText: ""
    }
  }
  componentDidMount() {
    axios
      .get("/api/getChores")
      .then(response => this.props.updateChores(response.data))
  }

  render() {
    const choreList = this.props.chores
      .filter(chore => chore.chore_holder === null)
      .map((chore, i) => <p className="itemFont" key={i}>{chore.chore_name}</p>)
    return (
      <div className="activeChoresPrimary">
        <p className="titleFont">Active Chores:</p>
        <div className="columnFlex">{choreList}</div>
        <SelectForm />
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  { updateChores }
)(PActiveChores)
