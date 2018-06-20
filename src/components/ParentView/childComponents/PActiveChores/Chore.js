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
  // below here I have the chore id in props, and the kid's ID to put it in, in item.kidId
  // pass a method into this, utilize it in the parent to handle an axios request
  endDrag(props, monitor) {
    let item = monitor.getDropResult()
    console.log(props.id, item.kidId)
    // return props.handleDrop(props.id, item)
    // axios.put("/api/updateKid", {
    //   chore: props.id,
    //   kid: item.kidId
    // }).then(response => console.log(response))
    socket.emit("updateKid", {
      chore: props.id,
      kid: item.kidId
    })
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
