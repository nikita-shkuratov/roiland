import {
  URL_GET_EPISODES,
  EPISODES,
  EPISODE,
  URL_GET_CHARACTERS,
} from '../constants'

export function startFetchEpisodes (url) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_EPISODES}${url}`)
      const json = await response.json()
      dispatch({ type: EPISODES.START, payload: json })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function fetchEpisodes (url) {
  return async dispatch => {
    await dispatch(startFetchEpisodes(url))
    await dispatch({ type: EPISODES.SUCCESS })
  }
}

export function startFetchEpisode (id) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_EPISODES}${id}`)
      const json = await response.json()

      const getAllCharacters = json.characters.map(item => parseInt(item.match(/\d+/))).join()

      const res = await fetch(`${URL_GET_CHARACTERS}${getAllCharacters}`)
      const data = await res.json()

      dispatch({ type: EPISODE.START, payload: { id: json, data } })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function fetchEpisode (id) {
  return async dispatch => {
    await dispatch(startFetchEpisode(id))
    await dispatch({ type: EPISODE.SUCCESS })
  }
}

export function setPageEpisodes (currentPage) {
  return { type: EPISODES.SET_PAGE, payload: currentPage }
}
