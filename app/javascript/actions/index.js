import * as types from '../constants/ActionTypes'
import Api from '../api.js'
import { sendMessage, setCallback } from '../cable'

export function getMessages() {
  return dispatch => {
    Api.get('api/messages')
      .then(res => {
        dispatch({ type: types.GET_MESSAGES, payload: res.data.messages })
      }
        )
      .catch(err => console.err(err))
  }
}

export function submitMessage(message) {
  sendMessage(message)
  return { type: types.SUBMIT_MESSAGE, payload: message }
}

export function recieveMessage(message) {
  return dispatch => {
    dispatch({ type: types.RECIEVE_MESSAGE, payload: message })
  }
}
