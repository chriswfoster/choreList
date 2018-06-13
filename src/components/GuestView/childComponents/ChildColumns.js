import React, { Component } from "react"
import axios from "axios"
import {connect} from "react-redux"
import { updateKids } from "../../../ducks/reducer"
import Child from "./Child"

class ChildColumns extends Component {
  componentDidMount() {
    axios.get("/api/getChildren").then(response => this.props.updateKids(response.data))
  }

  render() {
      console.log(this.props)
    return (
      <div>
        <Child />
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  { updateKids }
)(ChildColumns)
