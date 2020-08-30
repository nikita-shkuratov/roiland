import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fethEpisodesCharacter, } from '../../../redux/actions/actionsListForPage'
import { Link, useRouteMatch } from 'react-router-dom'
import { PATH_EPISODE } from '../../../constRotePath'
import { findCharacter } from '../../../redux/actions/actionsFind'
import DataList from '../../DataList/DataList'
import Loader from '../../Loader/Loader'

function CharacterPage() {
    const dispatch = useDispatch()
    const { params: { id: characterId } } = useRouteMatch()

    useEffect(() => {
        dispatch(findCharacter(characterId))
    }, [dispatch, characterId])

    const thisCharacter = useSelector(state => state.findChar.findCharacter)
    const episodesList = useSelector(state => state.episForChar.episodesForCharacter)

    const { name, status, species, gender, image, episode, origin } = thisCharacter
    const allEpisodes = thisCharacter.length ? episode.map(item => item.slice(40)).join() : ''

    useEffect(() => {
        dispatch(fethEpisodesCharacter(allEpisodes))
    }, [dispatch, allEpisodes])

    const arrayEpisodesList = Array.isArray(episodesList.results)
        ? episodesList.results
        : [episodesList.results]

    return (
        <section className='content'>
            <div className='content__block'>

                {thisCharacter.length === 0
                    ? <Loader />
                    : <div className='caracter'>
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
                }

                <div className='character__list'>
                    <h1 className='character__list__title'>
                        List of episodes with this character
                        </h1><hr />
                    {arrayEpisodesList.length === 1
                        ? <Loader />
                        : <ul >
                            {arrayEpisodesList.map((item, index) =>
                                <Link
                                    to={`${PATH_EPISODE}${item.id}`}
                                    key={index}>
                                    <DataList data={item} />
                                </Link>)}
                        </ul>}
                </div>
            </div>
        </section>
    )
}

export default CharacterPage