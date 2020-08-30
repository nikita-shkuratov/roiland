import { FETCH_CHARACTERS_FOR_EPISODE } from "../types"

const initialState = {
    charactersForEpisode: []
}

export const charactersForEpisodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS_FOR_EPISODE:
            return {
                ...state,
                charactersForEpisode: action.payload
            }
        default: return state
    }
}