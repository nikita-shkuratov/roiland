import { combineReducers } from 'redux'
import { fetchListEpisodesReducer } from './fetchListEpisodesReducer'
import { fetchDesiredEpisodeReducer } from './fetchDesiredEpisodeReducer'

export const episodeReducer = combineReducers({
  listEpisodes: fetchListEpisodesReducer,
  desiredEpisode: fetchDesiredEpisodeReducer,
})
