import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocations } from '../../../../actions'
import DataList from '../../../blocks/DataList/DataList'
import Loader from '../../../blocks/Loader/Loader'
import Pagination from '../../../controls/Pagination/Pagination'
import { configLocationList } from '../../../../helpers/configCreator/configLocation'
import { Content, ContentBlock } from '../../styles'

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
    <Content>
      <ContentBlock>
        {loading
          ? <Loader />
          : (
            <>
              <Pagination data={locationsList.info} />
              <DataList data={locationConfig} />
            </>)}
      </ContentBlock>
    </Content>
  )
}

export default LocationsList
