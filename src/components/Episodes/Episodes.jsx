import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fethedEpisodes } from '../../redux/actions/actions'
import DataList from '../DataList/DataList'

function Episodes() {
    const dispatch = useDispatch()
    const episodesList = useSelector(state => state.fetchData.fethedEpisodes)

    useEffect(() => {
        dispatch(fethedEpisodes())
    }, [dispatch])

    const { results } = episodesList

    return (
        <section className='content'>
            <div className='content__block'>
                {
                    episodesList.length === 0
                        ? <p>Loading...</p>
                        : <ul>{results.map(item => <DataList key={item.id} data={item} />)}</ul>
                }
            </div>
        </section>
    )
}

export default Episodes
