import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fethEpisodes } from '../../redux/actions/actionsList'
import { PATH_EPISODE } from '../../constRotePath'
import DataList from '../DataList/DataList'
import Loader from '../Loader/Loader'

function Episodes() {
    const dispatch = useDispatch()
    const episodesList = useSelector(state => state.list.fethedEpisodes)

    useEffect(() => {
        dispatch(fethEpisodes())
    }, [dispatch])

    const { results } = episodesList

    return (
        <section className='content'>
            <div className='content__block'>
                {!results
                    ? <Loader />
                    : <ul>{results.map(item =>
                        <Link to={`${PATH_EPISODE}${item.id}`} key={item.id}>
                            <DataList data={item} />
                        </Link>)}
                    </ul>
                }
            </div>
        </section>
    )
}

export default Episodes


