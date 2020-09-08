import { initialState } from './initialState'
import {
  CHARACTERS,
  CHARACTER,
} from '../constants/actions'

export function characterReducer (state = initialState, action) {
  switch (action.type) {
    case CHARACTERS.START:
      return {
        ...state,
        loading: true,
        list: action.payload,
      }
    case CHARACTERS.SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case CHARACTER.START:
      return {
        ...state,
        loading: true,
        id: action.payload.id,
        data: action.payload.data,
      }
    case CHARACTER.SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case CHARACTERS.SET_PAGE:
      return { ...state, page: action.payload }
    default:
      return state
  }
}
