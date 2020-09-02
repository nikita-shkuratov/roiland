import { combineReducers } from 'redux'
import { characterReducer } from './characterReducer'
import { episodeReducer } from './episodeReducer'
import { locationReducer } from './locationReducer'

export const rootReducer = combineReducers({
  character: characterReducer,
  episode: episodeReducer,
  location: locationReducer,
})
