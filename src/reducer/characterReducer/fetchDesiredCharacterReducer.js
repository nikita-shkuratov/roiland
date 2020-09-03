import { FIND_CHARACTER } from '../../constants'

const initialState = {
  character: [],
}

export const fetchDesiredCharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_CHARACTER:
      return {
        ...state,
        character: action.payload,
      }
    default:
      return state
  }
}
