import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocations } from '../../../../actions'
import DataList from '../../../blocks/DataList/DataList'
import Loader from '../../../blocks/Loader/Loader'
import Pagination from '../../../controls/Pagination/Pagination'
import { configLocationList } from '../configCreator/configCreatorForLocation'

function LocationsList () {
  const dispatch = useDispatch()
  const locationsList = useSelector(state => state.location.list)
  const currentPage = useSelector(state => state.location.page)
  const loading = useSelector(state => state.location.loading) || locationsList.length === 0

  useEffect(() => {
    dispatch(fetchLocations(`?page=${currentPage}`))
  }, [dispatch, currentPage])

  const locationConfig = configLocationList(locationsList.results)

  return (
    <section className="content">
      <div className="content__block">
        <Pagination data={locationsList} />

        {loading
          ? <Loader />
          : <DataList data={locationConfig} />}
      </div>
    </section>
  )
}

export default LocationsList
