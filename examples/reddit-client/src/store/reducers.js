import { combineReducers } from 'redux'

import { INVALIDATE_SUBREDDIT, RECEIVE_POSTS, REQUEST_POSTS, SELECT_SUBREDDIT } from './actions'

function selectedSubreddit (state = 'reduxjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

function posts (state = { didInvalidate: false, isFetching: false, items: [] }, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return { ...state, didInvalidate: true }
    case REQUEST_POSTS:
      return { ...state, didInvalidate: false, isFetching: true }
    case RECEIVE_POSTS:
      return { ...state, didInvalidate: false, isFetching: false, items: action.posts, lastUpdated: action.receivedAt }
    default:
      return state
  }
}

function postsBySubreddit (state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return { ...state, [action.subreddit]: posts(state[action.subreddit], action) }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer
