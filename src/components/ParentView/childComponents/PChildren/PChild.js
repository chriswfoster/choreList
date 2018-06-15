import React, {Component} from 'react'
import { DropTarget } from "react-dnd"
import { connect } from "react-redux"

const Types = {
    ITEM: "chore"
  }
  function collect(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget()
    }
  }

class PChild extends Component{

    render() {

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
    )(DropTarget(Types.ITEM, {}, collect)(PChild))
    