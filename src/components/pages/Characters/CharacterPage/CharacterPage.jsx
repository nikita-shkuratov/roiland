import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacter } from '../../../../actions'
import { useRouteMatch } from 'react-router-dom'
import Loader from '../../../blocks/Loader/Loader'
import DataCard from '../../../blocks/DataCard/DataCard'
import { configCharacterPage } from '../configCreator/configCreatorForCharacter'
import { configEpisodeList } from '../../Episodes/configCreator/configCreatorForEpisode'

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
    <section className="content">
      <div className="content__block">
        {loading ? <Loader /> : <DataCard data={characterConfig} />}
      </div>
    </section>
  )
}

export default CharacterPage
