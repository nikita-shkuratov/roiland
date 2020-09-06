import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from '../../../actions'
import DataList from '../../blocks/DataList/DataList'
import Loader from '../../blocks/Loader/Loader'
import Pagination from '../../controls/Pagination/Pagination'

function Characters () {
  const dispatch = useDispatch()
  const charactersList = useSelector(state => state.character.listCharacters)
  const currentPage = useSelector(state => state.character.pageCharacters)
  const loading = useSelector(state => state.character.loading)

  useEffect(() => {
    console.log('render')
    dispatch(fetchCharacters(`?page=${currentPage}`))
  }, [dispatch, currentPage])

  return (
    <section className="content">
      <div className="content__block">
        <Pagination data={charactersList} />

        {loading
          ? <Loader />
          : <DataList character={charactersList.results} />}
      </div>
    </section>
  )
}

export default Characters
