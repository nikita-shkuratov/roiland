import {
  URL_GET_CHARACTERS,
  FETCH_CHARACTERS,
  FIND_CHARACTER,
} from '../constants'
import { showLoader, hideLoader } from './appAction'

export function fethCharacters (url) {
  return async dispatch => {
    try {
      dispatch(showLoader())
      const response = await fetch(`${URL_GET_CHARACTERS}${url}`)
      const json = await response.json()
      dispatch({ type: FETCH_CHARACTERS, payload: json })
      dispatch(hideLoader())
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function findCharacter (id) {
  return async dispatch => {
    try {
      dispatch(showLoader())
      const response = await fetch(`${URL_GET_CHARACTERS}${id}`)
      const json = await response.json()
      dispatch({ type: FIND_CHARACTER, payload: json })
      dispatch(hideLoader())
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}
