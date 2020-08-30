import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { URL_GET_CHARACTERS } from '../../../apiUrls'
import { fethCharactersLocation } from '../../../redux/actions/actions'
import locationIco from '../../../style/img/location-ico.png'

function LocationPage(props) {
    const dispatch = useDispatch()

    const locationsList = useSelector(state => state.list.fethedLocations)
    const charactersList = useSelector(state => state.listForPage.charactersForLocation)

    const getIdLocation = props.match.params.id || '';
    const findLocation = locationsList.results.find(item => item.id === Number(getIdLocation))

    const { name, type, residents } = findLocation

    const allCharacters = residents.map(item => item.slice(42)).join()
    let getUrlcharacters = `${URL_GET_CHARACTERS}${allCharacters}`

    useEffect(() => {
        dispatch(fethCharactersLocation(getUrlcharacters))
    }, [dispatch, getUrlcharacters])

    const arrayCharactersList = Array.isArray(charactersList)
        ? charactersList
        : [charactersList]

    return (
        <section className='content'>
            <div className='content__block'>
                <div className='episode__info'>
                    <img className='play_ico' src={locationIco} alt='' />
                    <h1>{name}</h1><h2>{type}</h2>
                </div>
            </div>
            <div className='episode__list'>
                <h1 className='episode__list__title'>
                    List of characters that were in this location
                </h1><hr />
            </div>
            {arrayCharactersList.length === 0
                ? <p>Loading...</p>
                : <ul>
                    {arrayCharactersList.map((item, index) =>
                        <li className='character__list__item' key={index}>
                            {`${item.name}`}
                        </li>)}
                </ul>}
        </section >
    )
}

export default LocationPage
