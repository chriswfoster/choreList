import axios from "axios"

// This is an action constants.
const NOTHING="NOTHING"

// This is my initial state. 
const initialState = {
 nothing: ""
}

// My reducer.
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NOTHING:
      return Object.assign({}, state, {
        nothing: action.payload
      })

    default:
      return state
  }
}

// Action creators.


export function sendUpdate(listId, cards, reducerObj) {
return{
    type: NOTHING,
    payload: "hi"
}
}