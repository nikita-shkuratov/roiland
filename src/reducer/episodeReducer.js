import {
  START_FETCH_EPISODES,
  SUCCESS_FETCH_EPISODES,
  START_FETCH_EPISODE,
  SUCCESS_FETCH_EPISODE,
  SET_PAGE_EPISODES,
} from '../constants/actions'

const initialState = {
  listEpisodes: [],
  desiredEpisode: [],
  pageEpisodes: 1,
  loading: false,
  loaded: false,
}

export function episodeReducer (state = initialState, action) {
  switch (action.type) {
    case START_FETCH_EPISODES:
      return {
        ...state,
        loading: true,
        loaded: false,
        listEpisodes: action.payload,
      }
    case SUCCESS_FETCH_EPISODES:
      return {
        ...state,
        loading: false,
        loaded: true,
      }
    case START_FETCH_EPISODE:
      return { ...state, loading: true, loaded: false, desiredEpisode: action.payload }
    case SUCCESS_FETCH_EPISODE:
      return {
        ...state,
        loading: false,
        loaded: true,
      }
    case SET_PAGE_EPISODES:
      return { ...state, pageEpisodes: action.payload }
    default:
      return state
  }
}
