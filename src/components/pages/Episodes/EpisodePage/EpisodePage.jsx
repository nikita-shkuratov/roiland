import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import Loader from '../../../blocks/Loader/Loader'
import DataCard from '../../../blocks/DataCard/DataCard'
import { Content, ContentBlock } from '../../styles'
import { configEpisodePage } from '../../../../helpers/configCreator/configEpisode'
import { configCharacterList } from '../../../../helpers/configCreator/configCharacter'
import { fetchEpisode } from '../../../../actions'

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
    <Content>
      <ContentBlock>
        {loading ? <Loader /> : <DataCard data={episodeConfig} />}
      </ContentBlock>
    </Content>
  )
}

export default EpisodePage
