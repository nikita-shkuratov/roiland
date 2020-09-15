import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { fetchLocation } from '../../../../actions'
import Loader from '../../../blocks/Loader/Loader'
import DataCard from '../../../blocks/DataCard/DataCard'
import { configLocationPage } from '../../../../helpers/configCreator/configLocation'
import { configCharacterList } from '../../../../helpers/configCreator/configCharacter'
import { Content, ContentBlock } from '../../styles'

function LocationPage () {
  const dispatch = useDispatch()
  const {
    params: { id: locationdId },
  } = useRouteMatch()

  useEffect(() => {
    dispatch(fetchLocation(locationdId))
  }, [dispatch, locationdId])

  const desiredLocation = useSelector(state => state.location.id)
  const charactersList = useSelector(state => state.location.data)
  const loading = useSelector(state => state.location.loading)

  const arrayCharactersList = Array.isArray(charactersList)
    ? charactersList
    : [charactersList]

  const createConfigCharactersList = configCharacterList(arrayCharactersList)
  const locationConfig = configLocationPage(desiredLocation, createConfigCharactersList)

  return (
    <Content>
      <ContentBlock>
        {loading ? <Loader /> : <DataCard data={locationConfig} />}
      </ContentBlock>
    </Content>
  )
}

export default LocationPage
