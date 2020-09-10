import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLocation } from '../../../../actions'
import { useRouteMatch } from 'react-router-dom'
import Loader from '../../../blocks/Loader/Loader'
import DataCard from '../../../blocks/DataCard/DataCard'
import { configLocationPage } from '../configCreator/configCreatorForLocation'
import { configCharacterList } from '../../Characters/configCreator/configCreatorForCharacter'

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
    <section className="content">
      <div className="content__block">
        {loading ? <Loader /> : <DataCard data={locationConfig} />}
      </div>
    </section>
  )
}

export default LocationPage
