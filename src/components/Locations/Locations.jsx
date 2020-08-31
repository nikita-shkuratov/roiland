import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fethLocations } from '../../redux/actions/actionsList'
import { Link } from 'react-router-dom'
import { PATH_LOCATION } from '../../constRotePath'
import DataList from '../DataList/DataList'
import Loader from '../Loader/Loader'
import Pagination from '../Pagination/Pagination'

function Locations() {
    const dispatch = useDispatch()
    const locationsList = useSelector(state => state.list.fethedLocations)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        dispatch(fethLocations(`?page=${currentPage}`))
    }, [dispatch,currentPage])

    const { results } = locationsList
    const { info } = locationsList

    return (
        <section className='content'>
            <div className='content__block'>
            <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    info={info} />

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
