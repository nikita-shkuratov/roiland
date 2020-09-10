import { initialState } from './initialState'
import {
  LOCATIONS,
  LOCATION,
} from '../constants/actions'

export function locationReducer (state = initialState, action) {
  switch (action.type) {
    case LOCATIONS.START:
      return {
        ...state,
        loading: true,
        list: action.payload,
      }
    case LOCATIONS.SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case LOCATION.START:
      return {
        ...state,
        loading: true,
        id: action.payload.id,
        data: action.payload.data,
      }
    case LOCATION.SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case LOCATIONS.SET_PAGE:
      return { ...state, page: action.payload }
    default:
      return state
  }
}
