import {
  URL_GET_LOCATIONS,
  START_FETCH_LOCATIONS,
  SUCCESS_FETCH_LOCATIONS,
  START_FETCH_LOCATION,
  SUCCESS_FETCH_LOCATION,
  SET_PAGE_LOCATIONS,
} from '../constants'

export function startFetchLocations (url) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_LOCATIONS}${url}`)
      const json = await response.json()
      dispatch({ type: START_FETCH_LOCATIONS, payload: json })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function fetchLocations (url) {
  return async dispatch => {
    await dispatch(startFetchLocations(url))
    await dispatch({ type: SUCCESS_FETCH_LOCATIONS })
  }
}

export function startFetchLocation (id) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_LOCATIONS}${id}`)
      const json = await response.json()
      dispatch({ type: START_FETCH_LOCATION, payload: json })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function fetchLocation (id) {
  return async dispatch => {
    await dispatch(startFetchLocation(id))
    await dispatch({ type: SUCCESS_FETCH_LOCATION })
  }
}

export function setPageLocations (currentPage) {
  return { type: SET_PAGE_LOCATIONS, payload: currentPage }
}
