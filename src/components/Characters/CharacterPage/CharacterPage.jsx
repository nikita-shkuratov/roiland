import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { URL_GET_EPISODES } from '../../../apiUrls'
import { useEffect } from 'react'
import { fethEpisodesCharacter } from '../../../redux/actions/actions'

function CharacterPage(props) {
    const dispatch = useDispatch()

    const charactersList = useSelector(state => state.list.fethedCharacters)
    const episodesList = useSelector(state => state.listForPage.episodesForCharacter)

    const GetIdCharacter = props.match.params.id || ''
    const findCharacter = charactersList.results.find(item => item.id === Number(GetIdCharacter))

    const { name, status, species, gender, image, episode, origin } = findCharacter

    const allEpisodes = episode.map(item => item.slice(40)).join()
    let getUrlEpizodes = `${URL_GET_EPISODES}${allEpisodes}`

    useEffect(() => {
        dispatch(fethEpisodesCharacter(getUrlEpizodes))
    }, [dispatch, getUrlEpizodes])

    const arrayEpisodesList = Array.isArray(episodesList)
        ? episodesList
        : [episodesList]

    return (
        <section className='content'>
            <div className='content__block'>
                <div className='caracter'>
                    <div className='character__img'>
                        <img className='avatar' src={image} alt='' />
                    </div>
                    <div className='character__info'>
                        <p>{`NAME : ${name}`}</p>
                        <p>{`GENDER : ${gender}`}</p>
                        <p>{`SPECIES : ${species}`}</p>
                        <p>{`ORIGIN : ${origin.name}`}</p>
                        <p>{`STATUS : ${status}`}</p>
                    </div>
                </div>
                <div className='character__list'>
                    <h1 className='character__list__title'>
                        List of episodes with this character
                        </h1><hr />
                    {arrayEpisodesList.length === 0
                        ? <p>Loading...</p>
                        : <ul >
                            {arrayEpisodesList.map((item, index) =>
                                <li className='character__list__item' key={index}>
                                    {<div className='item_info'> <p>{item.episode}</p><p>{item.name}</p></div>}
                                </li>)}
                        </ul>}
                </div>
            </div>
        </section>
    )
}

export default CharacterPage
