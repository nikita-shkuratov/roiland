import { FETCH_CHARACTERS } from '../../constants'

const initialState = {
  list: [],
  page: 1,
  loading: false,
}

export const fetchListCharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, charactersList: action.payload }
    default:
      return state
  }
}
