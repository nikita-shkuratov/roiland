import { SHOW_LOADER, HIDE_LOADER } from '../constants'

export function showLoader () {
  return { type: SHOW_LOADER }
}

export function hideLoader () {
  return { type: HIDE_LOADER }
}
