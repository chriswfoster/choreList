import axios from "axios"

// This is an action constants.
const GET_KIDS = "GET_KIDS"
const GET_CHORES = "GET_CHORES"

// This is my initial state.
const initialState = {
  kids: [],
  chores: []
}

// My reducer.
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_KIDS:
      return Object.assign({}, state, {
        kids: action.payload
      })
    case GET_CHORES:
      return Object.assign({}, state, { chores: action.payload })

    default:
      return state
  }
}

// Action creators.

export function updateKids(kidsArr) {
  return {
    type: GET_KIDS,
    payload: kidsArr
  }
}

export function updateChores(choresArr) {
  return {
    type: GET_CHORES,
    payload: choresArr
  }
}
