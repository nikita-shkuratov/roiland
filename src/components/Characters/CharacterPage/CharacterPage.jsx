import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { URL_GET_EPISODES } from '../../../redux/types'
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
    }, [])

    const arrayEpisodesList = Array.isArray(episodesList)
        ? episodesList
        : [episodesList]

    return (
        <section className='content'>
            <div className='content__block'>
                <p>{`name - ${name} / status - ${status} / origin - ${origin.name} / species - ${species}`}</p>
                <p>{`gender - ${gender}   /  `}</p>
                <img src={image} alt='' />
            </div>
            {arrayEpisodesList === 0
                ? <p>Loading...</p>
                : <ul>
                    {arrayEpisodesList.map((item, index) => <li key={index}>{`${item.name}  ${item.episode}`}</li>)}
                </ul>}
        </section>
    )
}

export default CharacterPage

