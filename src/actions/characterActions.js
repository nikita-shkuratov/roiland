import {
  URL_GET_CHARACTERS,
  START_FETCH_CHARACTERS,
  SUCCESS_FETCH_CHARACTERS,
  START_FETCH_CHARACTER,
  SUCCESS_FETCH_CHARACTER,
  SET_PAGE_CHARACTERS,
} from '../constants'

export function startFetchCharacters (url) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_CHARACTERS}${url}`)
      const json = await response.json()
      dispatch({ type: START_FETCH_CHARACTERS, payload: json })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function fetchCharacters (url) {
  return async dispatch => {
    await dispatch(startFetchCharacters(url))
    await dispatch({ type: SUCCESS_FETCH_CHARACTERS })
  }
}

export function startFetchCharacter (id) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_CHARACTERS}${id}`)
      const json = await response.json()
      dispatch({ type: START_FETCH_CHARACTER, payload: json })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function fetchCharacter (id) {
  return async dispatch => {
    await dispatch(startFetchCharacter(id))
    await dispatch({ type: SUCCESS_FETCH_CHARACTER })
  }
}

export function setPageCharacters (currentPage) {
  return { type: SET_PAGE_CHARACTERS, payload: currentPage }
}
