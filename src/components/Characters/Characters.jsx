import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fethCharacters } from '../../redux/actions/actions'
import { URL_GET_CHARACTERS } from '../../apiUrls'
import DataList from '../DataList/DataList'

function Characters() {
    const dispatch = useDispatch()
    const charactersList = useSelector(state => state.list.fethedCharacters)

    useEffect(() => {
        dispatch(fethCharacters(URL_GET_CHARACTERS))
    }, [dispatch])

    const { results } = charactersList

    return (
        <section className='content'>
            <div className='content__block'>
                {
                    charactersList.length === 0
                        ? <p>Loading...</p>
                        : <ul>{results.map(item =>
                            <Link to={`/character/${item.id}`} key={item.id}>
                                <DataList data={item} />
                            </Link>)}</ul>
                }
            </div>
        </section>
    )
}

export default Characters


