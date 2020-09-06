import {
  START_FETCH_CHARACTERS,
  SUCCESS_FETCH_CHARACTERS,
  START_FETCH_CHARACTER,
  SUCCESS_FETCH_CHARACTER,
  SET_PAGE_CHARACTERS,
} from '../constants/actions'

const initialState = {
  listCharacters: [],
  desiredCharacter: [],
  pageCharacters: 1,
  loading: false,
}

export function characterReducer (state = initialState, action) {
  switch (action.type) {
    case START_FETCH_CHARACTERS:
      return {
        ...state,
        loading: true,
        listCharacters: action.payload,
      }
    case SUCCESS_FETCH_CHARACTERS:
      return {
        ...state,
        loading: false,
      }
    case START_FETCH_CHARACTER:
      return {
        ...state,
        loading: true,
        desiredCharacter: action.payload,
      }
    case SUCCESS_FETCH_CHARACTER:
      return {
        ...state,
        loading: false,
      }
    case SET_PAGE_CHARACTERS:
      return { ...state, pageCharacters: action.payload }
    default:
      return state
  }
}
