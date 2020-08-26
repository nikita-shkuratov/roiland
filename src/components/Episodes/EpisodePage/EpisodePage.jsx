import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { URL_GET_CHARACTERS } from '../../../redux/types'
import { fethCharactersEpisode } from '../../../redux/actions/actions'

function EpisodePage(props) {
    const dispatch = useDispatch()

    const episodesList = useSelector(state => state.list.fethedEpisodes)
    const charactersList = useSelector(state => state.listForPage.charactersForEpisode)

    const getIdEpisode = props.match.params.id || '';
    const findEpisode = episodesList.results.find(item => item.id === Number(getIdEpisode))

    const { name, air_date, episode, characters } = findEpisode

    const allCharacters = characters.map(item => item.slice(42)).join()
    let getUrlcharacters = `${URL_GET_CHARACTERS}${allCharacters}`

    useEffect(() => {
        dispatch(fethCharactersEpisode(getUrlcharacters))
    }, [])

    const arrayCharactersList = Array.isArray(charactersList)
        ? charactersList
        : [charactersList]
    return (
        <section className='content'>
            <div className='content__block'>
                <p>{`name - ${name} / episode - ${episode} / air_date - ${air_date}`}</p>
            </div>
            {arrayCharactersList.length === 0
                ? <p>Loading...</p>
                : <ul>
                    {arrayCharactersList.map((item, index) => <li key={index}>{`${item.name}`}</li>)}
                </ul>}
        </section>
    )
}

export default EpisodePage
