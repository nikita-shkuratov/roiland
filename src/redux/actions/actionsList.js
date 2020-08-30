import { FETCH_CHARACTERS, FETCH_EPISODES, FETCH_LOCATIONS } from "../types"
import { URL_GET_CHARACTERS, URL_GET_EPISODES, URL_GET_LOCATIONS } from "../../constApiUrl"

export function fethCharacters() {
    return async dispatch => {
        try {
            const response = await fetch(URL_GET_CHARACTERS)
            const json = await response.json()
            dispatch({ type: FETCH_CHARACTERS, payload: json })
        }
        catch (error) {
            console.log(`server error - ${error}`)
        }
    }
}

export function fethEpisodes(id) {
    return async dispatch => {
        try {
            const response = await fetch(URL_GET_EPISODES)
            const json = await response.json()
            dispatch({ type: FETCH_EPISODES, payload: json })
        } catch (error) {
            console.log(`server error - ${error}`)
        }
    }
}

export function fethLocations(id) {
    return async dispatch => {
        try {
            const response = await fetch(URL_GET_LOCATIONS)
            const json = await response.json()
            dispatch({ type: FETCH_LOCATIONS, payload: json })
        } catch (error) {
            console.log(`server error - ${error}`)
        }
    }
}


