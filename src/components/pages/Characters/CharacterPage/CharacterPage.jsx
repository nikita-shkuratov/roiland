import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { fetchCharacter } from '../../../../actions'
import Loader from '../../../blocks/Loader/Loader'
import DataCard from '../../../blocks/DataCard/DataCard'
import { configCharacterPage } from '../../../../helpers/configCreator/configCharacter'
import { configEpisodeList } from '../../../../helpers/configCreator/configEpisode'
import { Content, ContentBlock } from '../../styles'

function CharacterPage () {
  const dispatch = useDispatch()
  const {
    params: { id: characterId },
  } = useRouteMatch()

  useEffect(() => {
    dispatch(fetchCharacter(characterId))
  }, [dispatch, characterId])

  const desiredCharacter = useSelector(state => state.character.id)
  const episodesList = useSelector(state => state.character.data)
  const loading = useSelector(state => state.character.loading)

  const arrayEpisodesList = Array.isArray(episodesList)
    ? episodesList
    : [episodesList]

  const createConfigEpisodesList = configEpisodeList(arrayEpisodesList)
  const characterConfig = configCharacterPage(desiredCharacter, createConfigEpisodesList)

  return (
    <Content>
      <ContentBlock>
        {loading ? <Loader /> : <DataCard data={characterConfig} />}
      </ContentBlock>
    </Content>
  )
}

export default CharacterPage
