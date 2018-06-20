import React, { Component } from "react"
import { DragSource } from "react-dnd"

// import axios from "axios"
import socketIOClient from "socket.io-client"
const socket = socketIOClient("/")

const Types = {
  ITEM: "chore"
}

const itemSource = {
  beginDrag(props) {
    console.log("beginDrag")
    const item = { src: props.src, id: props.id }
    return item
  },
  endDrag(props, monitor) {
    let item = monitor.getDropResult()
    console.log(item)
    item
      ? socket.emit("updateKid", {
          chore: props.id,
          kid: item.kidId
        })
      : null
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
