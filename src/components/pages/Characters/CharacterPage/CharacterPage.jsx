import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEpisodes, fetchCharacter } from '../../../../actions'
import { Link, useRouteMatch } from 'react-router-dom'
import { PATH_EPISODE } from '../../../../constants'
import DataList from '../../../blocks/DataList/DataList'
import Loader from '../../../blocks/Loader/Loader'

function CharacterPage () {
  const dispatch = useDispatch()
  const {
    params: { id: characterId },
  } = useRouteMatch()

  useEffect(() => {
    dispatch(fetchCharacter(characterId))
  }, [dispatch, characterId])

  const desiredCharacter = useSelector(
    state => state.character.desiredCharacter,
  )
  const episodesList = useSelector(
    state => state.episode.listEpisodes,
  )
  const loading = useSelector(state => state.character.loading)

  const {
    name,
    status,
    species,
    gender,
    image,
    episode,
    origin,
  } = desiredCharacter

  const allEpisodes = episode
    ? episode.map(item => item.slice(40)).join()
    : ''

  useEffect(() => {
    dispatch(fetchEpisodes(allEpisodes))
  }, [dispatch, allEpisodes])

  const arrayEpisodesList = Array.isArray(episodesList)
    ? episodesList
    : [episodesList]

  return (
    <section className="content">
      <div className="content__block">
        {loading ? (
          <Loader />
        ) : (
          <div className="caracter">
            <div className="character__img">
              <img className="avatar" src={image} alt="" />
            </div>

            {origin && (
              <div className="character__info">
                <p>{`NAME : ${name}`}</p>
                <p>{`GENDER : ${gender}`}</p>
                <p>{`SPECIES : ${species}`}</p>
                <p>{`ORIGIN : ${origin.name}`}</p>
                <p>{`STATUS : ${status}`}</p>
              </div>
            )}
          </div>
        )}

        <div className="character__list">
          <h1 className="character__list__title">
            List of episodes with this character
          </h1>
          <hr />
          {arrayEpisodesList.length === 0 ? (
            <Loader />
          ) : (
            <ul>
              {arrayEpisodesList.map((item, index) => (
                <Link to={`${PATH_EPISODE}${item.id}`} key={index}>
                  <DataList data={item} />
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default CharacterPage
