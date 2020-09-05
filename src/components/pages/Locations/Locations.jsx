import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocations } from '../../../actions'
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

  return (
    <section className="content">
      <div className="content__block">
        <Pagination data={locationsList} />

        {locationsList === 0
          ? <Loader />
          : <DataList location={locationsList.results} />}
      </div>
    </section>
  )
}

export default Locations
