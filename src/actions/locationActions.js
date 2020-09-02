import {
  URL_GET_LOCATIONS,
  FETCH_LOCATIONS,
  FIND_LOCATION,
} from '../constants'

export function fethLocations (url) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_LOCATIONS}${url}`)
      const json = await response.json()
      dispatch({ type: FETCH_LOCATIONS, payload: json })
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
