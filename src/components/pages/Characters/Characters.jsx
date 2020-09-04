import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCharacters } from '../../../actions'
import { PATH_CHARACTER } from '../../../constants'
import DataList from '../../blocks/DataList/DataList'
import Loader from '../../blocks/Loader/Loader'
import Pagination from '../../controls/Pagination/Pagination'

function Characters () {
  const dispatch = useDispatch()
  const charactersList = useSelector(state => state.character.listCharacters)
  const currentPage = useSelector(state => state.character.pageCharacters)
  const loading = useSelector(state => state.character.loading)
  const loaded = useSelector(state => state.character.loaded)

  useEffect(() => {
    dispatch(fetchCharacters(`?page=${currentPage}`))
  }, [dispatch, currentPage])

  const { results, info } = charactersList

  return (
    <section className="content">
      <div className="content__block">
        <Pagination
          info={info} />

        {loading ? (
          <Loader />
        ) : (
          <ul>
            {results &&
              results.map(item => (
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

export default Characters
