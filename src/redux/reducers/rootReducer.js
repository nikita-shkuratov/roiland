import { combineReducers } from 'redux'
import { fetchDataReducer } from './fetchDataReducer'

export const rootReducer = combineReducers({
    fetchData: fetchDataReducer
})