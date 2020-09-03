import { FETCH_CHARACTERS } from '../../constants'

const initialState = {
  results: [],
}

export const fetchListCharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, results: action.payload }
    default:
      return state
  }
}
