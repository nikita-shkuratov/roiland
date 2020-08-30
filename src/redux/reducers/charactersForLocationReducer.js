import { FETCH_CHARACTERS_FOR_LOCATION } from "../types"

const initialState = {
    charactersForLocation: []
}

export const charactersForLocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS_FOR_LOCATION:
            return {
                ...state,
                charactersForLocation: action.payload
            }
        default: return state
    }
}