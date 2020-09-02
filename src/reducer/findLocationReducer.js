import { FIND_LOCATION } from '../constants'

const initialState = {
  findLocation: [],
}

export const findLocationReducer = (state = initialState, action) => {
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
