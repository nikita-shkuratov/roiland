import { FETCH_EPISODES } from '../../constants'

const initialState = {
  list: [],
  page: 1,
  loading: false,
}

export const fetchListEpisodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES:
      return { ...state, fethedEpisodes: action.payload }
    default:
      return state
  }
}
