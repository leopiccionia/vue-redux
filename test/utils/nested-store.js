import { combineReducers, createStore } from 'redux'

const SET_NESTED = 'SET_NESTED'

export function setNested (value) {
  return { type: SET_NESTED, value }
}

function fooReducer (state = { bar: 0 }, action) {
  switch (action.type) {
    case SET_NESTED:
      return { bar: action.value }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  foo: fooReducer
})

export function createNestedStore () {
  return createStore(rootReducer)
}
