import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { URL_GET_CHARACTERS } from '../../../redux/types'
import { fethCharactersLocation } from '../../../redux/actions/actions'

function LocationPage(props) {
    const dispatch = useDispatch()

    const locationsList = useSelector(state => state.list.fethedLocations)
    const charactersList = useSelector(state => state.listForPage.charactersForLocation)

    const getIdLocation = props.match.params.id || '';
    const findLocation = locationsList.results.find(item => item.id === Number(getIdLocation))

    const { name, type, dimension, residents } = findLocation

    const allCharacters = residents.map(item => item.slice(42)).join()
    let getUrlcharacters = `${URL_GET_CHARACTERS}${allCharacters}`

    useEffect(() => {
        dispatch(fethCharactersLocation(getUrlcharacters))
    }, [])

    const arrayCharactersList = Array.isArray(charactersList)
        ? charactersList
        : [charactersList]

    return (
        <section className='content'>
            <div className='content__block'>
                <p>{`name - ${name} / type - ${type} / dimension - ${dimension}`}</p>
            </div>
            {arrayCharactersList.length === 0
                ? <p>Loading...</p>
                : <ul>
                    {arrayCharactersList.map((item, index) => <li key={index}>{`${item.name}`}</li>)}
                </ul>}
        </section>
    )
}

export default LocationPage
