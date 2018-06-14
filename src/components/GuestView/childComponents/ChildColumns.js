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
      const children = this.props.kids.map((kid, i) => <Child kid={kid} key={i}/>)
    return (
      <div className="rowFlexUncentered">
        {children}
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  { updateKids }
)(ChildColumns)
