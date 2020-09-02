import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fethCharacters } from '../../../actions'
import { PATH_CHARACTER } from '../../../constants'
import DataList from '../../blocks/DataList/DataList'
import Loader from '../../blocks/Loader/Loader'
import Pagination from '../../controls/Pagination/Pagination'

function Characters () {
  const dispatch = useDispatch()
  const charactersList = useSelector(state => state.list.fethedCharacters)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(fethCharacters(`?page=${currentPage}`))
  }, [dispatch, currentPage])

  const { results } = charactersList
  const { info } = charactersList

  return (
    <section className="content">
      <div className="content__block">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          info={info} />

        {!results ? (
          <Loader />
        ) : (
          <ul>
            {results.map(item => (
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
