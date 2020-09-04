import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocations } from '../../../actions'
import { Link } from 'react-router-dom'
import { PATH_LOCATION } from '../../../constants'
import DataList from '../../blocks/DataList/DataList'
import Loader from '../../blocks/Loader/Loader'
import Pagination from '../../controls/Pagination/Pagination'

function Locations () {
  const dispatch = useDispatch()
  const locationsList = useSelector(state => state.location.listLocations)
  const currentPage = useSelector(state => state.location.pageLocations)
  const loading = useSelector(state => state.location.loading)
  const loaded = useSelector(state => state.location.loaded)

  useEffect(() => {
    dispatch(fetchLocations(`?page=${currentPage}`))
  }, [dispatch, currentPage])

  const { results, info } = locationsList

  return (
    <section className="content">
      <div className="content__block">
        <Pagination
          info={info} />

        {loading ? (
          <Loader />
        ) : (
          <ul>
            {results && results.map(item => (
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
