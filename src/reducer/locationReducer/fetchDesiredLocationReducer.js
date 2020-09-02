import { FIND_LOCATION } from '../../constants'

const initialState = {
  location: [],
  loading: false,
}

export const fetchDesiredLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_LOCATION:
      return {
        ...state,
        findLocation: action.payload,
      }
    default:
      return state
  }
}
