import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fethCharacters } from '../../redux/actions/actions'
import DataList from '../DataList/DataList'

function Characters() {
    const dispatch = useDispatch()
    const charactersList = useSelector(state => state.fetchData.fethedCharacters)

    useEffect(() => {
        dispatch(fethCharacters())
    }, [dispatch])

    const { results } = charactersList

    return (
        <section className='content'>
            <div className='content__block'>
                {
                    charactersList.length === 0
                        ? <p>Loading...</p>
                        : <ul>{results.map(item => <DataList key={item.id} data={item} />)}</ul>
                }
            </div>
        </section>
    )
}

export default Characters


