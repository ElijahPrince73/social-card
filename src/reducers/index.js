import { GET_USERS } from '../actions/types'

export default function(state = 10, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload.results }
  }
  return state
}
