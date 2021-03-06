import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEpisode } from '../../../../actions'
import { useRouteMatch } from 'react-router-dom'
import Loader from '../../../blocks/Loader/Loader'
import DataCard from '../../../blocks/DataCard/DataCard'
import { configEpisodePage } from '../configCreator/configCreatorForEpisode'
import { configCharacterList } from '../../Characters/configCreator/configCreatorForCharacter'

function EpisodePage () {
  const dispatch = useDispatch()
  const {
    params: { id: episodId },
  } = useRouteMatch()

  useEffect(() => {
    dispatch(fetchEpisode(episodId))
  }, [dispatch, episodId])

  const desiredEpisode = useSelector(state => state.episode.id)
  const charactersList = useSelector(state => state.episode.data)
  const loading = useSelector(state => state.episode.loading)

  const arrayCharactersList = Array.isArray(charactersList)
    ? charactersList
    : [charactersList]

  const createConfigCharactersList = configCharacterList(arrayCharactersList)
  const episodeConfig = configEpisodePage(desiredEpisode, createConfigCharactersList)

  return (
    <section className="content">
      <div className="content__block">
        {loading ? <Loader /> : <DataCard data={episodeConfig} />}
      </div>
    </section>
  )
}

export default EpisodePage
