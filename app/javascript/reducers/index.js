import * as types from '../constants/ActionTypes'
let initialState = { messages: [] }

export default function appState(state = initialState, action) {
  switch (action.type) {
    case types.GET_MESSAGES:
      return  {...state, messages: action.payload}
    case types.SUBMIT_MESSAGE:
      return {...state, messages: state.messages.concat(action.payload)}
    case types.RECIEVE_MESSAGE:
      return {...state, messages: state.messages.concat(action.payload)}
  }
  return initialState
}
