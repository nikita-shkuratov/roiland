import { combineReducers } from 'redux'
import { fetchListReducer } from './fetchListReducer'
import { charactersForEpisodeReducer } from './charactersForEpisodeReducer'
import { charactersForLocationReducer } from './charactersForLocationReducer'
import { episodesForCharacterReducer } from './episodesForCharacterReducer'
import { findEpisodeReducer } from './findEpisodeReducer'
import { findCharacterReducer } from './findCharacterReducer'
import { findLocationReducer } from './findLocationReducer'

export const rootReducer = combineReducers({
    list: fetchListReducer,
    charForEpis: charactersForEpisodeReducer,
    charForLoc: charactersForLocationReducer,
    episForChar: episodesForCharacterReducer,
    findEpis: findEpisodeReducer,
    findChar: findCharacterReducer,
    findLoc: findLocationReducer
})