import axios from 'axios'

import { GET_USERS } from './types'

const API_URL = 'https://randomuser.me/api/?results=10'

export function getUsers() {
  return function(dispatch) {
    axios.get(API_URL)
    .then(response => {
        dispatch({
          type: GET_USERS,
          payload: response.data,
        })
      })
    .catch(err => {})
  }
}
