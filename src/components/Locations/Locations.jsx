import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fethLocations } from '../../redux/actions/actionsList'
import { Link } from 'react-router-dom'
import { PATH_LOCATION } from '../../constRotePath'
import DataList from '../DataList/DataList'
import Loader from '../Loader/Loader'

function Locations() {
    const dispatch = useDispatch()
    const locationsList = useSelector(state => state.list.fethedLocations)

    useEffect(() => {
        dispatch(fethLocations())
    }, [dispatch])

    const { results } = locationsList

    return (
        <section className='content'>
            <div className='content__block'>
                {!results
                    ? <Loader />
                    : <ul>{results.map(item =>
                        <Link to={`${PATH_LOCATION}${item.id}`} key={item.id}>
                            <DataList data={item} />
                        </Link>)}
                    </ul>
                }
            </div>
        </section>
    )
}

export default Locations
