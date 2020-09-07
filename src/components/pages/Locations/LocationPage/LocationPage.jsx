import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters, fetchLocation } from '../../../../actions'
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

  const desiredLocation = useSelector(state => state.location.desiredLocation)
  const charactersList = useSelector(state => state.character.listCharacters)
  const loading = useSelector(state => state.episode.loading)

  const { residents } = desiredLocation

  const allCharacters = residents
    ? residents.map(item => parseInt(item.match(/\d+/))).join()
    : ''

  useEffect(() => {
    residents && dispatch(fetchCharacters(allCharacters))
  }, [dispatch, allCharacters, residents])

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
