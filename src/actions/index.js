import axios from 'axios'

import { GET_USERS } from './types'

const API_URL = 'https://randomuser.me/api/?results=12'

export const getUsersSuccess = users => {
  return {
    type: GET_USERS,
    payload: users,
  }
}

export const getUsers = () => {
  return dispatch => {
    return axios.get(API_URL).then(response => {
      dispatch(getUsersSuccess(response.data))
    })
  }
}
