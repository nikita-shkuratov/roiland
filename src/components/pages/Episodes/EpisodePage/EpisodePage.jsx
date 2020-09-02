import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fethCharacters, findEpisode } from '../../../../actions'
import { Link, useRouteMatch } from 'react-router-dom'
import { PATH_CHARACTER } from '../../../../constants'
import DataList from '../../../blocks/DataList/DataList'
import Loader from '../../../blocks/Loader/Loader'
import playIco from '../../../../style/img/play-ico.png'

function EpisodePage () {
  const dispatch = useDispatch()
  const {
    params: { id: episodId },
  } = useRouteMatch()

  useEffect(() => {
    dispatch(findEpisode(episodId))
  }, [dispatch, episodId])

  const desiredEpisode = useSelector(
    state => state.episode.desiredEpisode.episode,
  )
  const charactersList = useSelector(
    state => state.character.listCharacters.results,
  )

  const { name, air_date, episode, characters } = desiredEpisode

  const allCharacters = characters
    ? characters.map(item => item.slice(42)).join()
    : ''

  useEffect(() => {
    dispatch(fethCharacters(allCharacters))
  }, [dispatch, allCharacters])

  const arrayCharactersList = Array.isArray(charactersList)
    ? charactersList
    : [charactersList]

  return (
    <section className="content">
      <div className="content__block">
        {desiredEpisode.length === 0 ? (
          <Loader />
        ) : (
          <div className="episode__info">
            <img className="play_ico" src={playIco} alt="" />
            <h1>{episode}</h1>
            <h2>{name}</h2>
            <h2>{air_date}</h2>
          </div>
        )}
      </div>
      <div className="episode__list">
        <h1 className="episode__list__title">
          List of characters that were in this episode
        </h1>
        <hr />
        {arrayCharactersList.length === 0 ? (
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

export default EpisodePage
