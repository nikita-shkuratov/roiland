import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { URL_GET_EPISODES } from '../../redux/types'
import DataList from '../DataList/DataList'
import { fethEpisodes } from '../../redux/actions/actions'

function Episodes() {
    const dispatch = useDispatch()
    const episodesList = useSelector(state => state.list.fethedEpisodes)

    useEffect(() => {
        dispatch(fethEpisodes(URL_GET_EPISODES))
    }, [dispatch])

    const { results } = episodesList

    return (
        <section className='content'>
            <div className='content__block'>
                {
                    episodesList.length === 0
                        ? <p>Loading...</p>
                        : <ul>{results.map(item =>
                            <Link to={`/episode/${item.id}`} key={item.id}>
                                <DataList data={item} />
                            </Link>)}</ul>
                }
            </div>
        </section>
    )
}

export default Episodes


