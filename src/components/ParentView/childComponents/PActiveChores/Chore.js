import React, { Component } from "react"
import { DragSource } from "react-dnd"

const Types = {
  ITEM: "chore"
}

const itemSource = {
  beginDrag(props) {
    console.log("beginDrag")
    const item = { src: props.src, id: props.id }
    return item
  },
  // below here I have the chore id in props, and the kid's ID to put it in, in item.kidId
  // pass a method into this, utilize it in the parent to handle an axios request
  endDrag(props, monitor) {
    let item = monitor.getDropResult()
    console.log(props.id, item.kidId)
    return props.handleDrop(props.src)
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Chore extends Component {
  render() {
    const { isDragging, connectDragSource, src } = this.props
    return connectDragSource(<p> {this.props.src} </p>)
  }
}
export default DragSource(Types.ITEM, itemSource, collect)(Chore)
