import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import DataList from '../DataList/DataList'
import { URL_GET_LOCATIONS } from '../../apiUrls'
import { fethLocations } from '../../redux/actions/actions'
import { Link } from 'react-router-dom'

function Locations() {
    const dispatch = useDispatch()
    const locationsList = useSelector(state => state.list.fethedLocations)

    useEffect(() => {
        dispatch(fethLocations(URL_GET_LOCATIONS))
    }, [dispatch])

    const { results } = locationsList

    return (
        <section className='content'>
            <div className='content__block'>
                {
                    locationsList.length === 0
                        ? <p>Loading...</p>
                        : <ul>{results.map(item =>
                            <Link to={`/location/${item.id}`} key={item.id}>
                                <DataList data={item} />
                            </Link>)}</ul>
                }
            </div>
        </section>
    )
}

export default Locations
