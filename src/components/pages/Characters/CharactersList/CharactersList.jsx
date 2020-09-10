import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from '../../../../actions'
import DataList from '../../../blocks/DataList/DataList'
import Loader from '../../../blocks/Loader/Loader'
import Pagination from '../../../controls/Pagination/Pagination'
import { configCharacterList } from '../configCreator/configCreatorForCharacter'

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
    <section className="content">
      <div className="content__block">
        {loading
          ? <Loader />
          : <><Pagination data={charactersList.info} /> <DataList data={characterConfig} /></>}
      </div>
    </section>
  )
}

export default CharactersList
