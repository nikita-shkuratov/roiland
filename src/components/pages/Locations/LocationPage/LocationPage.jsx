import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLocation } from '../../../../actions'
import { useRouteMatch } from 'react-router-dom'
import Loader from '../../../blocks/Loader/Loader'
import DataCard from '../../../blocks/DataCard/DataCard'

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

  return (
    <section className="content">
      {loading ? <Loader /> : <DataCard location={[desiredLocation, arrayCharactersList]} />}
    </section>
  )
}

export default LocationPage
