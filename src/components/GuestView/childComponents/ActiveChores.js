import React, {Component} from 'react'
import { connect } from "react-redux"
import {updateChores} from '../../../ducks/reducer'
import axios from 'axios'

class ActiveChores extends Component{

    componentDidMount(){
        axios.get('/api/getChores')
        .then(response => this.props.updateChores(response.data))
      }


    
render(){
return(
<div>
Active Chores:
</div>
)
}
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  {updateChores}
)(ActiveChores)