import { FIND_EPISODE } from '../../constants'

const initialState = {
  episode: [],
  loading: false,
}

export const fetchDesiredEpisodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_EPISODE:
      return {
        ...state,
        episode: action.payload,
      }
    default:
      return state
  }
}
