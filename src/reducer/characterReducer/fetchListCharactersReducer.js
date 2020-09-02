import { FETCH_CHARACTERS } from '../../constants'

const initialState = {
  results: [],
  page: 1,
  loading: false,
}

export const fetchListCharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, results: action.payload, info: action.payload }
    default:
      return state
  }
}
