import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters, fetchEpisode } from '../../../../actions'
import { useRouteMatch } from 'react-router-dom'
import Loader from '../../../blocks/Loader/Loader'
import DataCard from '../../../blocks/DataCard/DataCard'

function EpisodePage () {
  const dispatch = useDispatch()
  const {
    params: { id: episodId },
  } = useRouteMatch()

  useEffect(() => {
    dispatch(fetchEpisode(episodId))
  }, [dispatch, episodId])

  const desiredEpisode = useSelector(
    state => state.episode.desiredEpisode,
  )
  const charactersList = useSelector(
    state => state.character.listCharacters,
  )
  const loading = useSelector(state => state.episode.loading)

  const { characters } = desiredEpisode

  const allCharacters = characters
    ? characters.map(item => parseInt(item.match(/\d+/))).join()
    : ''

  useEffect(() => {
    characters && dispatch(fetchCharacters(allCharacters))
  }, [dispatch, allCharacters, characters])

  const arrayCharactersList = Array.isArray(charactersList)
    ? charactersList
    : [charactersList]

  return (
    <section className="content">
      <div className="content__block">
        {loading ? <Loader /> : <DataCard episode={[desiredEpisode, arrayCharactersList]} />}
      </div>
    </section>
  )
}

export default EpisodePage
