import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocations } from '../../../../actions'
import DataList from '../../../blocks/DataList/DataList'
import Loader from '../../../blocks/Loader/Loader'
import Pagination from '../../../controls/Pagination/Pagination'

function LocationsList () {
  const dispatch = useDispatch()
  const locationsList = useSelector(state => state.location.list)
  const currentPage = useSelector(state => state.location.page)
  const loading = useSelector(state => state.location.loading)

  useEffect(() => {
    dispatch(fetchLocations(`?page=${currentPage}`))
  }, [dispatch, currentPage])

  return (
    <section className="content">
      <div className="content__block">
        <Pagination data={locationsList} />

        {loading
          ? <Loader />
          : <DataList location={locationsList.results} />}
      </div>
    </section>
  )
}

export default LocationsList