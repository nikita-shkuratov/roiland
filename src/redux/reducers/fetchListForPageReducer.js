import { FETCH_EPISODES_FOR_CHARACTER, FETCH_CHARACTERS_FOR_LOCATION, FETCH_CHARACTERS_FOR_EPISODE } from "../types"

const initialState = {
    charactersForEpisode: [],
    charactersForLocation: [],
    episodesForCharacter: []
}

export const fetchListForPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS_FOR_EPISODE:
            return {
                ...state,
                charactersForEpisode: action.payload
            }
        case FETCH_CHARACTERS_FOR_LOCATION:
            return {
                ...state,
                charactersForLocation: action.payload
            }
        case FETCH_EPISODES_FOR_CHARACTER:
            return {
                ...state,
                episodesForCharacter: action.payload
            }
        default: return state
    }
}