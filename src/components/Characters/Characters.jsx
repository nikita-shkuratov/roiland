import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fethCharacters } from '../../redux/actions/actionsList'
import { PATH_CHARACTER } from '../../constRotePath'
import DataList from '../DataList/DataList'
import Loader from '../Loader/Loader'

function Characters() {
    const dispatch = useDispatch()
    const charactersList = useSelector(state => state.list.fethedCharacters)

    useEffect(() => {
        dispatch(fethCharacters())
    }, [dispatch])

    const { results } = charactersList

    return (
        <section className='content'>
            <div className='content__block'>
                {!results
                    ? <Loader />
                    : <ul>{results.map(item =>
                        <Link
                            to={`${PATH_CHARACTER}${item.id}`}
                            key={item.id}>
                            <DataList data={item} />
                        </Link>)}
                    </ul>
                }
            </div>
        </section>
    )
}

export default Characters


