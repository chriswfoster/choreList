import React, { Component } from "react"
import { connect } from "react-redux"

class Child extends Component {
  render() {
    console.log(this.props)
    const { name, id } = this.props.kid
    const chorelist = this.props.chores
      .filter(chore => chore.chore_holder === id)
      .map((chore, i) => (
        <div key={i}>
          <p className="itemFont">{chore.chore_name}</p>
        </div>
      ))
    return (
      <div className="childPrimary">
        <p className="titleFont">{name}</p>
        <div>{chorelist}</div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {}
)(Child)
