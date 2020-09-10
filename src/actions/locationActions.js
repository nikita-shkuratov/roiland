import {
  URL_GET_LOCATIONS,
  LOCATIONS,
  LOCATION,
  URL_GET_CHARACTERS,
} from '../constants'

export function startFetchLocations (url) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_LOCATIONS}${url}`)
      const json = await response.json()
      dispatch({ type: LOCATIONS.START, payload: json })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function fetchLocations (url) {
  return async dispatch => {
    await dispatch(startFetchLocations(url))
    await dispatch({ type: LOCATIONS.SUCCESS })
  }
}

export function startFetchLocation (id) {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_GET_LOCATIONS}${id}`)
      const json = await response.json()

      const getAllCharacters = json.residents.map(item => parseInt(item.match(/\d+/))).join()

      const res = await fetch(`${URL_GET_CHARACTERS}${getAllCharacters}`)
      const data = await res.json()

      dispatch({ type: LOCATION.START, payload: { id: json, data } })
    } catch (error) {
      console.log(`server error - ${error}`)
    }
  }
}

export function fetchLocation (id) {
  return async dispatch => {
    await dispatch(startFetchLocation(id))
    await dispatch({ type: LOCATION.SUCCESS })
  }
}

export function setPageLocations (currentPage) {
  return { type: LOCATIONS.SET_PAGE, payload: currentPage }
}
