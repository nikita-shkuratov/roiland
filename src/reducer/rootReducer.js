import { combineReducers } from 'redux'
import { characterReducer } from './characterReducer'
import { episodeReducer } from './episodeReducer'
import { locationReducer } from './locationReducer'
import { appReducer } from './appReducer/appReducer'

export const rootReducer = combineReducers({
  character: characterReducer,
  episode: episodeReducer,
  location: locationReducer,
  app: appReducer,
})
