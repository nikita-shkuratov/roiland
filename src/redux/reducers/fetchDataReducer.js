import { FETCH_CHARACTERS, FETCH_EPISODES, FETCH_LOCATIONS } from "../types"

const initialState = {
    fethedCharacters: [],
    fethedEpisodes: [],
    fethedLocations: []
}

export const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS:
            return { ...state, fethedCharacters: action.payload }
        case FETCH_EPISODES:
            return { ...state, fethedEpisodes: action.payload }
        case FETCH_LOCATIONS:
            return { ...state, fethedLocations: action.payload }
        default: return state
    }
}