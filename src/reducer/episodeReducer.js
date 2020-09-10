
import { initialState } from './initialState'
import {
  EPISODES,
  EPISODE,
} from '../constants/actions'

export function episodeReducer (state = initialState, action) {
  switch (action.type) {
    case EPISODES.START:
      return {
        ...state,
        loading: true,
        list: action.payload,
      }
    case EPISODES.SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case EPISODE.START:
      return {
        ...state,
        loading: true,
        id: action.payload.id,
        data: action.payload.data,
      }
    case EPISODE.SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case EPISODES.SET_PAGE:
      return { ...state, page: action.payload }
    default:
      return state
  }
}
