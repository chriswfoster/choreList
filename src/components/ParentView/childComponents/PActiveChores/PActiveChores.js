import React, { Component } from "react"
import { updateChores } from "../../../../ducks/reducer"
import Chore from "./Chore"
import { connect } from "react-redux"
import SelectForm from "./SelectForm"
import axios from "axios"

class PActiveChores extends Component {
  constructor() {
    super()
    this.state = {
      inputText: "",
      box: []
    }
  }
  componentDidMount() {
    axios
      .get("/api/getChores")
      .then(response => this.props.updateChores(response.data))
  }

  handleDrop = (src, other) => {
    console.log(src, other)
    let placeholder = this.state.box
    placeholder.push(src)
    this.setState({ box: placeholder })
  }

  render() {
    console.log(this.state)
    const choreList = this.props.chores
      .filter(chore => chore.chore_holder === null)
      .map((chore, i) => (
        <Chore
        id={chore.id}
          src={chore.chore_name}
          handleDrop={src => this.handleDrop(src)}
          key={chore.id}
        />
      ))
    return (
      <div className="activeChoresPrimary">
        <p className="titleFont">Active Chores:</p>
        <div className="columnFlex">
          {choreList}
          <SelectForm />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  { updateChores }
)(PActiveChores)
