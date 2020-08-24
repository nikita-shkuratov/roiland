import { FETCH_CHARACTERS, FETCH_EPISODES, FETCH_LOCATIONS } from "../types"

export function fethCharacters() {
    return async dispatch => {
        const response = await fetch('https://rickandmortyapi.com/api/character/')
        const json = await response.json()
        dispatch({ type: FETCH_CHARACTERS, payload: json })
    }
}
export function fethedEpisodes() {
    return async dispatch => {
        const response = await fetch('https://rickandmortyapi.com/api/episode/')
        const json = await response.json()
        dispatch({ type: FETCH_EPISODES, payload: json })
    }
}
export function fethedLocations() {
    return async dispatch => {
        const response = await fetch('https://rickandmortyapi.com/api/location/')
        const json = await response.json()
        dispatch({ type: FETCH_LOCATIONS, payload: json })
    }
}

