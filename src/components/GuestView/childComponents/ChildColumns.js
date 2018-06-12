import React, {Component} from 'react'
import axios from 'axios'

import Child from './Child'

class ChildColumns extends Component{


componentDidMount(){
    axios.get('/api/getChildren')
    .then(response => console.log(response))
}

render(){
return(
<div>
<Child />
</div>
)
}
}
export default ChildColumns