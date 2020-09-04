import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters, fetchLocation } from '../../../../actions'
import { Link, useRouteMatch } from 'react-router-dom'
import { PATH_CHARACTER } from '../../../../constants'
import locationIco from '../../../../style/img/location-ico.png'
import DataList from '../../../blocks/DataList/DataList'
import Loader from '../../../blocks/Loader/Loader'

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

  const { name, type, residents } = desiredLocation
  const allCharacters = residents ? residents.map(item => item.slice(42)).join() : ''

  useEffect(() => {
    dispatch(fetchCharacters(allCharacters))
  }, [dispatch, allCharacters])

  const arrayCharactersList = Array.isArray(charactersList)
    ? charactersList
    : [charactersList]

  return (
    <section className="content">
      <div className="content__block">
        {desiredLocation.length === 0 ? (
          <Loader />
        ) : (
          <div className="episode__info">
            <img className="play_ico" src={locationIco} alt="" />
            <h1>{name}</h1>
            <h2>{type}</h2>
          </div>
        )}
      </div>
      <div className="episode__list">
        <h1 className="episode__list__title">
          List of characters that were in this location
        </h1>
        <hr />
        {arrayCharactersList.length === 0 ? (
          <Loader />
        ) : (
          <ul>
            {arrayCharactersList.map((item, index) => (
              <Link to={`${PATH_CHARACTER}${item.id}`} key={index}>
                <DataList data={item} />
              </Link>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default LocationPage
