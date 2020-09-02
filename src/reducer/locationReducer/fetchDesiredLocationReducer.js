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
        location: action.payload,
      }
    default:
      return state
  }
}
