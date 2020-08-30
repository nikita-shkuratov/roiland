import { FETCH_EPISODES_FOR_CHARACTER} from "../types"

const initialState = {
    episodesForCharacter: []
}

export const episodesForCharacterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EPISODES_FOR_CHARACTER:
            return {
                ...state,
                episodesForCharacter: action.payload
            }
        default: return state
    }
}