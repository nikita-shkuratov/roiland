import { FETCH_CHARACTERS, FETCH_EPISODES, FETCH_LOCATIONS, FETCH_CHARACTERS_FOR_EPISODE, FETCH_CHARACTERS_FOR_LOCATION, FETCH_EPISODES_FOR_CHARACTER, } from "../types"

export function fethCharacters(url) {
    return async dispatch => {
        try {
            const response = await fetch(url)
            const json = await response.json()
            dispatch({ type: FETCH_CHARACTERS, payload: json })
        }
        catch (error) {
            console.log(`server error - ${error}`)
        }
    }
}

export function fethEpisodes(url) {
    return async dispatch => {
        try {
            const response = await fetch(url)
            const json = await response.json()
            dispatch({ type: FETCH_EPISODES, payload: json })
        } catch (error) {
            console.log(`server error - ${error}`)
        }
    }
}

export function fethLocations(url) {
    return async dispatch => {
        try {
            const response = await fetch(url)
            const json = await response.json()
            dispatch({ type: FETCH_LOCATIONS, payload: json })
        } catch (error) {
            console.log(`server error - ${error}`)
        }
    }
}

export function fethCharactersEpisode(url) {
    return async dispatch => {
        try {
            const response = await fetch(url)
            const json = await response.json()
            dispatch({ type: FETCH_CHARACTERS_FOR_EPISODE, payload: json })
        } catch (error) {
            console.log(`server error - ${error}`)
        }
    }
}

export function fethCharactersLocation(url) {
    return async dispatch => {
        try {
            const response = await fetch(url)
            const json = await response.json()
            dispatch({ type: FETCH_CHARACTERS_FOR_LOCATION, payload: json })
        } catch (error) {
            console.log(`server error - ${error}`)
        }
    }
}

export function fethEpisodesCharacter(url) {
    return async dispatch => {
        try {
            const response = await fetch(url)
            const json = await response.json()
            dispatch({ type: FETCH_EPISODES_FOR_CHARACTER, payload: json })
        } catch (error) {
            console.log(`server error - ${error}`)
        }
    }
}
