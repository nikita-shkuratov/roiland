import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fethCharactersEpisode } from '../../../redux/actions/actionsListForPage'
import { Link, useRouteMatch } from 'react-router-dom'
import { PATH_CHARACTER } from '../../../constRotePath'
import { findEpisode } from '../../../redux/actions/actionsFind'
import DataList from '../../DataList/DataList'
import Loader from '../../Loader/Loader'
import playIco from '../../../style/img/play-ico.png'

function EpisodePage() {
    const dispatch = useDispatch()
    const { params: { id: episodId } } = useRouteMatch()

    useEffect(() => {
        dispatch(findEpisode(episodId))
    }, [dispatch, episodId])

    const thisEpisode = useSelector(state => state.findEpis.findEpisode)
    const charactersList = useSelector(state => state.charForEpis.charactersForEpisode)

    const { name, air_date, episode, characters } = thisEpisode
    const allCharacters = thisEpisode.length ? characters.map(item => item.slice(42)).join() : ''

    useEffect(() => {
        dispatch(fethCharactersEpisode(allCharacters))
    }, [dispatch, allCharacters])

    const arrayCharactersList = Array.isArray(charactersList.results)
        ? charactersList.results
        : [charactersList.results]

    return (
        <section className='content'>
            <div className='content__block'>
                {thisEpisode.length === 0
                    ? <Loader />
                    : <div className='episode__info'>
                        <img className='play_ico' src={playIco} alt='' />
                        <h1>{episode}</h1><h2>{name}</h2><h2>{air_date}</h2>
                    </div>
                }
            </div>
            <div className='episode__list'>
                <h1 className='episode__list__title'>
                    List of characters that were in this episode
                </h1><hr />
                {arrayCharactersList.length === 1
                    ? <Loader />
                    : <ul>
                        {arrayCharactersList.map((item) =>
                            <Link
                                to={`${PATH_CHARACTER}${item.id}`}
                                key={item.id}>
                                <DataList data={item} />
                            </Link>)
                        }
                    </ul>
                }
            </div>
        </section>
    )
}

export default EpisodePage