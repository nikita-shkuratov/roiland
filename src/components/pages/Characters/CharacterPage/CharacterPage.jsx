import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEpisodes, fetchCharacter } from '../../../../actions'
import { useRouteMatch } from 'react-router-dom'
import Loader from '../../../blocks/Loader/Loader'
import DataCard from '../../../blocks/DataCard/DataCard'

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

  const { episode } = desiredCharacter

  const allEpisodes = episode
    ? episode.map(item => parseInt(item.match(/\d+/))).join()
    : ''

  useEffect(() => {
    episode && dispatch(fetchEpisodes(allEpisodes))
  }, [dispatch, allEpisodes, episode])

  const arrayEpisodesList = Array.isArray(episodesList)
    ? episodesList
    : [episodesList]

  return (
    <section className="content">
      <div className="content__block">
        {loading ? <Loader /> : <DataCard character={[desiredCharacter, arrayEpisodesList]} />}
      </div>
    </section>
  )
}

export default CharacterPage
