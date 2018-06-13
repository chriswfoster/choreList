import axios from "axios"

// This is an action constants.
const GET_KIDS = "GET_KIDS"

// This is my initial state. 
const initialState = {
 kids: []
}

// My reducer.
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_KIDS:
      return Object.assign({}, state, {
        kids: action.payload
      })

    default:
      return state
  }
}

// Action creators.


export function updateKids(kidsArr) {
return{
    type: GET_KIDS,
    payload: kidsArr
}
}