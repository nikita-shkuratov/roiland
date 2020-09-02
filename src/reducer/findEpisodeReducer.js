import { FIND_EPISODE } from '../constants'

const initialState = {
  findEpisode: [],
}

export const findEpisodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_EPISODE:
      return {
        ...state,
        findEpisode: action.payload,
      }
    default:
      return state
  }
}
