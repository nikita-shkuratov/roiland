import { combineReducers } from 'redux'
import { fetchListLocationsReducer } from './fetchListLocationsReducer'
import { fetchDesiredLocationReducer } from './fetchDesiredLocationReducer'

export const locationReducer = combineReducers({
  listLocations: fetchListLocationsReducer,
  desiredLocation: fetchDesiredLocationReducer,
})
