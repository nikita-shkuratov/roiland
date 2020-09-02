import { FETCH_LOCATIONS } from '../../constants'

const initialState = {
  list: [],
  page: 1,
  loading: false,
}

export const fetchListLocationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return { ...state, fethedLocations: action.payload }
    default:
      return state
  }
}
