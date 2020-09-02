import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fethCharactersLocation, findLocation } from '../../../../actions'
import { Link, useRouteMatch } from 'react-router-dom'
import { PATH_CHARACTER } from '../../../../constants'
import locationIco from '../../../../style/img/location-ico.png'
import DataList from '../../../blocks/DataList/DataList'
import Loader from '../../../blocks/Loader/Loader'

function LocationPage () {
  const dispatch = useDispatch()
  const {
    params: { id: episodId },
  } = useRouteMatch()

  useEffect(() => {
    dispatch(findLocation(episodId))
  }, [dispatch, episodId])

  const thisLocation = useSelector(state => state.findLoc.findLocation)
  const charactersList = useSelector(
    state => state.charForLoc.charactersForLocation,
  )

  const { name, type, residents } = thisLocation
  const allCharacters = thisLocation.length
    ? residents.map(item => item.slice(42)).join()
    : ''

  useEffect(() => {
    dispatch(fethCharactersLocation(allCharacters))
  }, [dispatch, allCharacters])

  const arrayCharactersList = Array.isArray(charactersList.results)
    ? charactersList.results
    : [charactersList.results]

  return (
    <section className="content">
      <div className="content__block">
        {thisLocation.length === 0 ? (
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
        {arrayCharactersList.length === 1 ? (
          <Loader />
        ) : (
          <ul>
            {arrayCharactersList.map(item => (
              <Link to={`${PATH_CHARACTER}${item.id}`} key={item.id}>
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
