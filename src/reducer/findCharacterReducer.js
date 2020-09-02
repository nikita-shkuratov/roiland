import { FIND_CHARACTER } from '../constants'

const initialState = {
  findCharacter: [],
}

export const findCharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_CHARACTER:
      return {
        ...state,
        findCharacter: action.payload,
      }
    default:
      return state
  }
}
