import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fethedLocations } from '../../redux/actions/actions'
import DataList from '../DataList/DataList'

function Locations() {
    const dispatch = useDispatch()
    const locationsList = useSelector(state => state.fetchData.fethedLocations)

    useEffect(() => {
        dispatch(fethedLocations())
    }, [dispatch])

    const { results } = locationsList

    return (
        <section className='content'>
            <div className='content__block'>
                {
                    locationsList.length === 0
                        ? <p>Loading...</p>
                        : <ul>{results.map(item => <DataList key={item.id} data={item} />)}</ul>
                }
            </div>
        </section>
    )
}

export default Locations
