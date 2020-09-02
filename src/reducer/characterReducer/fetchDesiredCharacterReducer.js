import { FIND_CHARACTER } from '../../constants'

const initialState = {
  character: [],
  loading: false,
}

export const fetchDesiredCharacterReducer = (state = initialState, action) => {
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
