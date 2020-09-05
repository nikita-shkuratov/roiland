import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters, fetchLocation } from '../../../../actions'
import { useRouteMatch } from 'react-router-dom'
import DataList from '../../../blocks/DataList/DataList'
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
  const charactersList = useSelector(
    state => state.character.listCharacters,
  )

  const loading = useSelector(state => state.episode.loading)
  const loaded = useSelector(state => state.episode.loaded)

  const { residents } = desiredLocation

  const allCharacters = residents
    ? residents.map(item => parseInt(item.match(/\d+/))).join()
    : ''

  useEffect(() => {
    residents && dispatch(fetchCharacters(allCharacters))
  }, [dispatch, allCharacters])

  const arrayCharactersList = Array.isArray(charactersList)
    ? charactersList
    : [charactersList]

  return (
    <section className="content">
      <div className="content__block">
        {desiredLocation.length === 0 ? (
          <Loader />
        ) : <DataCard location={desiredLocation} />}
      </div>
      <div className="episode__list">
        <h1 className="episode__list__title">
          List of characters that were in this location
        </h1>
        <hr />
        {arrayCharactersList.length === 0
          ? <Loader />
          : <DataList character={arrayCharactersList} />}
      </div>
    </section>
  )
}

export default LocationPage
