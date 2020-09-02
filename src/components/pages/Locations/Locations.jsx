import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fethLocations } from '../../../actions'
import { Link } from 'react-router-dom'
import { PATH_LOCATION } from '../../../constants'
import DataList from '../../blocks/DataList/DataList'
import Loader from '../../blocks/Loader/Loader'
import Pagination from '../../controls/Pagination/Pagination'

function Locations () {
  const dispatch = useDispatch()
  const locationsList = useSelector(state => state.location.listLocations.results)
  const locationsPage = useSelector(state => state.location.listLocations.page)
  const locationsLoading = useSelector(state => state.location.listLocations.loading)

  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(fethLocations(`?page=${currentPage}`))
  }, [dispatch, currentPage])

  const { results, info } = locationsList

  return (
    <section className="content">
      <div className="content__block">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          info={info} />

        {!results ? (
          <Loader />
        ) : (
          <ul>
            {results.map(item => (
              <Link to={`${PATH_LOCATION}${item.id}`} key={item.id}>
                <DataList data={item} />
              </Link>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Locations
