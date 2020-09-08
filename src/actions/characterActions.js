import {
  URL_GET_CHARACTERS,
  CHARACTERS,
  CHARACTER,
  URL_GET_EPISODES,
} from '../constants'

export function startFetchCharacters (url) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_CHARACTERS}${url}`)
      const json = await response.json()
      dispatch({ type: CHARACTERS.START, payload: json })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function fetchCharacters (url) {
  return async dispatch => {
    await dispatch(startFetchCharacters(url))
    await dispatch({ type: CHARACTERS.SUCCESS })
  }
}

export function startFetchCharacter (id) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_CHARACTERS}${id}`)
      const json = await response.json()

      const getAllEpisodes = json.episode.map(item => parseInt(item.match(/\d+/))).join()

      const res = await fetch(`${URL_GET_EPISODES}${getAllEpisodes}`)
      const data = await res.json()

      dispatch({ type: CHARACTER.START, payload: { id: json, data } })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function fetchCharacter (id) {
  return async dispatch => {
    await dispatch(startFetchCharacter(id))
    await dispatch({ type: CHARACTER.SUCCESS })
  }
}

export function setPageCharacters (currentPage) {
  return { type: CHARACTERS.SET_PAGE, payload: currentPage }
}
