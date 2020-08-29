import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { URL_GET_CHARACTERS } from '../../../apiUrls'
import { fethCharactersEpisode } from '../../../redux/actions/actions'
import playIco from '../../../style/img/play-ico.png'

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
    }, [dispatch, getUrlcharacters])

    const arrayCharactersList = Array.isArray(charactersList)
        ? charactersList
        : [charactersList]

    return (
        <section className='content'>
            <div className='content__block'>
                <div className='episode__info'>
                    <img className='play_ico' src={playIco} alt='' />
                    <h1>{episode}</h1><h2>{name}</h2><h2>{air_date}</h2>
                </div>
            </div>
            <div className='episode__list'>
                <h1 className='episode__list__title'>
                    List of characters that were in this episode
                </h1><hr />
                {arrayCharactersList.length === 0
                    ? <p>Loading...</p>
                    : <ul>
                        {arrayCharactersList.map((item, index) =>
                            <li className='character__list__item' key={index}>
                                {<p>{item.name}</p>}
                            </li>)}
                    </ul>}
            </div>
        </section>
    )
}

export default EpisodePage
