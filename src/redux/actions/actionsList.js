import { FETCH_CHARACTERS, FETCH_EPISODES, FETCH_LOCATIONS } from "../types"
import { URL_GET_CHARACTERS, URL_GET_EPISODES, URL_GET_LOCATIONS } from "../../constApiUrl"

export function fethCharacters(url) {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_GET_CHARACTERS}${url}`)
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
            const response = await fetch(`${URL_GET_EPISODES}${url}`)
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
            const response = await fetch(`${URL_GET_LOCATIONS}${url}`)
            const json = await response.json()
            dispatch({ type: FETCH_LOCATIONS, payload: json })
        } catch (error) {
            console.log(`server error - ${error}`)
        }
    }
}


