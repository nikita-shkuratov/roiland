import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataList from '../../../blocks/DataList/DataList'
import Loader from '../../../blocks/Loader/Loader'
import Pagination from '../../../controls/Pagination/Pagination'
import { Content, ContentBlock } from '../../styles'
import { configCharacterList } from '../../../../helpers/configCreator/configCharacter'
import { fetchCharacters } from '../../../../actions'

function CharactersList () {
  const dispatch = useDispatch()
  const charactersList = useSelector(state => state.character.list)
  const currentPage = useSelector(state => state.character.page)
  const loading = useSelector(state => state.character.loading) || charactersList.length === 0

  useEffect(() => {
    dispatch(fetchCharacters(`?page=${currentPage}`))
  }, [dispatch, currentPage])

  const characterConfig = configCharacterList(charactersList.results)

  return (
    <Content>
      <ContentBlock>
        {loading
          ? <Loader />
          : (
            <>
              <Pagination data={charactersList.info} />
              <DataList data={characterConfig} />
            </>)}
      </ContentBlock>
    </Content>
  )
}

export default CharactersList
