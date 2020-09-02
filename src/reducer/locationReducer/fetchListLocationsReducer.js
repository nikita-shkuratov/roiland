import { FETCH_LOCATIONS } from '../../constants'

const initialState = {
  results: [],
  page: 1,
  loading: false,
}

export const fetchListLocationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return { ...state, results: action.payload }
    default:
      return state
  }
}
