import {
  START_FETCH_LOCATIONS,
  SUCCESS_FETCH_LOCATIONS,
  START_FETCH_LOCATION,
  SUCCESS_FETCH_LOCATION,
  SET_PAGE_LOCATIONS,
} from '../constants/actions'

const initialState = {
  listLocations: [],
  desiredLocation: [],
  pageLocations: 1,
  loading: false,
}

export function locationReducer (state = initialState, action) {
  switch (action.type) {
    case START_FETCH_LOCATIONS:
      return {
        ...state,
        loading: true,
        listLocations: action.payload,
      }
    case SUCCESS_FETCH_LOCATIONS:
      return {
        ...state,
        loading: false,
      }
    case START_FETCH_LOCATION:
      return {
        ...state,
        loading: true,
        desiredLocation: action.payload,
      }
    case SUCCESS_FETCH_LOCATION:
      return {
        ...state,
        loading: false,
      }
    case SET_PAGE_LOCATIONS:
      return { ...state, pageLocations: action.payload }
    default:
      return state
  }
}
