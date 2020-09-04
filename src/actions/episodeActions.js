import {
  START_FETCH_EPISODES,
  SUCCESS_FETCH_EPISODES,
  START_FETCH_EPISODE,
  SUCCESS_FETCH_EPISODE,
  SET_PAGE_EPISODES,
  URL_GET_EPISODES,
} from '../constants'

export function startFetchEpisodes (url) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_EPISODES}${url}`)
      const json = await response.json()
      dispatch({ type: START_FETCH_EPISODES, payload: json })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function fetchEpisodes (url) {
  return async dispatch => {
    await dispatch(startFetchEpisodes(url))
    await dispatch({ type: SUCCESS_FETCH_EPISODES })
  }
}

export function startFetchEpisode (id) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_EPISODES}${id}`)
      const json = await response.json()
      dispatch({ type: START_FETCH_EPISODE, payload: json })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function fetchEpisode (id) {
  return async dispatch => {
    await dispatch(startFetchEpisode(id))
    await dispatch({ type: SUCCESS_FETCH_EPISODE })
  }
}

export function setPageEpisodes (currentPage) {
  return { type: SET_PAGE_EPISODES, payload: currentPage }
}
