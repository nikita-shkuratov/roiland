import {
  FETCH_CHARACTERS_FOR_EPISODE,
  FETCH_CHARACTERS_FOR_LOCATION,
  FETCH_EPISODES_FOR_CHARACTER,
  URL_GET_CHARACTERS,
  URL_GET_EPISODES,
} from '../constants'

export function fethCharactersEpisode (id) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_CHARACTERS}${id}`)
      const json = await response.json()
      dispatch({ type: FETCH_CHARACTERS_FOR_EPISODE, payload: json })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function fethCharactersLocation (id) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_CHARACTERS}${id}`)
      const json = await response.json()
      dispatch({ type: FETCH_CHARACTERS_FOR_LOCATION, payload: json })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function fethEpisodesCharacter (id) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_EPISODES}${id}`)
      const json = await response.json()
      dispatch({ type: FETCH_EPISODES_FOR_CHARACTER, payload: json })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}
