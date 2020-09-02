import {
  URL_GET_CHARACTERS,
  URL_GET_EPISODES,
  URL_GET_LOCATIONS,
  FIND_CHARACTER,
  FIND_EPISODE,
  FIND_LOCATION,
} from '../constants'

export function findCharacter (id) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_CHARACTERS}${id}`)
      const json = await response.json()
      dispatch({ type: FIND_CHARACTER, payload: json })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function findEpisode (id) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_EPISODES}${id}`)
      const json = await response.json()
      dispatch({ type: FIND_EPISODE, payload: json })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function findLocation (id) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_LOCATIONS}${id}`)
      const json = await response.json()
      dispatch({ type: FIND_LOCATION, payload: json })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}
