import { combineReducers } from 'redux'
import { fetchListCharactersReducer } from './fetchListCharactersReducer'
import { fetchDesiredCharacterReducer } from './fetchDesiredCharacterReducer'

export const characterReducer = combineReducers({
  listCharacters: fetchListCharactersReducer,
  desiredCharacter: fetchDesiredCharacterReducer,
})
