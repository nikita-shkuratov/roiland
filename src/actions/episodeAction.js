import { URL_GET_EPISODES, FETCH_EPISODES, FIND_EPISODE } from '../constants'

export function fethEpisodes (url) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_EPISODES}${url}`)
      const json = await response.json()
      dispatch({ type: FETCH_EPISODES, payload: json })
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
