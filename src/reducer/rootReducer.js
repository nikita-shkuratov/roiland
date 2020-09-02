import { combineReducers } from 'redux'
import { fetchListReducer } from './fetchListReducer'
import { charactersForEpisodeReducer } from './charactersForEpisodeReducer'
import { charactersForLocationReducer } from './charactersForLocationReducer'
import { episodesForCharacterReducer } from './episodesForCharacterReducer'
import { findEpisodeReducer } from './findEpisodeReducer'
import { findCharacterReducer } from './findCharacterReducer'
import { findLocationReducer } from './findLocationReducer'
/* import {
  fetchListCharactersReducer,
  fetchDesiredCharacterReducer,
} from './characterReducer'
import {
  fetchListEpisodesReducer,
  fetchDesiredEpisodeReducer,
} from './episodeReducer'
import {
  fetchListLocationsReducer,
  fetchDesiredLocationReducer,
} from './locationReducer' */

export const rootReducer = combineReducers({
  list: fetchListReducer,
  charForEpis: charactersForEpisodeReducer,
  charForLoc: charactersForLocationReducer,
  episForChar: episodesForCharacterReducer,
  findEpis: findEpisodeReducer,
  findChar: findCharacterReducer,
  findLoc: findLocationReducer,
  /* listCharacters: fetchListCharactersReducer,
  desiredCharacter: fetchDesiredCharacterReducer,
  listEpisodes: fetchListEpisodesReducer,
  desiredEpisode: fetchDesiredEpisodeReducer,
  listLocations: fetchListLocationsReducer,
  desiredLocation: fetchDesiredLocationReducer, */
})
