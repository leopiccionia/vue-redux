import { createStore } from 'redux'

const INCREMENT = 'INCREMENT'
const SET_VALUE = 'SET_VALUE'

export function incrementCounter () {
  return { type: INCREMENT }
}

export function setCounter (value) {
  return { type: SET_VALUE, value }
}

function reducer (state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case SET_VALUE:
      return action.value
    default:
      return state
  }
}

export function createCounterStore () {
  return createStore(reducer)
}
