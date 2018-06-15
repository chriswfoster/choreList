import React, { Component } from "react"
import axios from "axios"

import {updateKids} from '../../../../ducks/reducer'
import { connect } from "react-redux"

class PChildColumns extends Component {
  componentDidMount() {
    axios
      .get("/api/getChildren")
      .then(response => this.props.updateKids(response.data))
  }
  render() {
    return <div />
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  { updateKids }
)(PChildColumns)
