import { combineReducers } from 'redux'
import { fetchListReducer } from './fetchListReducer'
import { fetchListForPageReducer } from './fetchListForPageReducer'

export const rootReducer = combineReducers({
    list: fetchListReducer,
    listForPage: fetchListForPageReducer
})