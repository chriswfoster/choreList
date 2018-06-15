import React, { Component } from "react"
import axios from "axios"

import PChild from './PChild'
import { updateKids } from "../../../../ducks/reducer"
import { connect } from "react-redux"

class PChildColumns extends Component {
  componentDidMount() {
    axios
      .get("/api/getChildren")
      .then(response => this.props.updateKids(response.data))
  }

  render() {
    const children = this.props.kids.map((kid, i) => (
      <PChild kid={kid} key={i} />
    ))
    return <div className="rowFlexUncentered">{children}</div>
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  { updateKids }
)(PChildColumns)
