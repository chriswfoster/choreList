import React, { Component } from "react"
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

class PChild extends Component {
  render() {
    const { name, id } = this.props.kid
    const chorelist = this.props.chores
      .filter(chore => chore.chore_holder === id)
      .map((chore, i) => (
        <div key={i}>
          <p className="itemFont">{chore.chore_name}</p>
        </div>
      ))
    const { connectDropTarget } = this.props

    return connectDropTarget(
      <div className="childPrimary">
        <p className="titleFont">{name}</p>
        <div>{chorelist}</div>
      </div>
    )
  }
}

/// need to see if this guy-below activates ever
const cardTarget = {
    drop(props, monitor, component) {
      const { id } = props.kid
      console.log(id)
      const sourceObj = monitor.getItem()
      console.log(sourceObj)
    //   if (id !== sourceObj.kidId) component.pushCard(sourceObj.card)
      return {
        kidId: props.kid.id,
        
      }
    }
  }
  
  const cardSource = {
    beginDrag(props) {
      return {
        index: props.index,
        listId: props.listId,
        card: props.card
      }
    }
  }



const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {}
)(DropTarget(Types.ITEM, cardTarget, connect  => ({
    connectDropTarget: connect.dropTarget(),
    test: "hi"
  }))(PChild))
