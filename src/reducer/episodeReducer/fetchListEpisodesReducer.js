import { FETCH_EPISODES } from '../../constants'

const initialState = {
  results: [],
  page: 1,
  loading: false,
}

export const fetchListEpisodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES:
      return { ...state, results: action.payload }
    default:
      return state
  }
}
