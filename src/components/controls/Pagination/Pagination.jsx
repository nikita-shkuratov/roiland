import React from 'react'
import { createPagination } from './createPagination'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setPageCharacters, setPageEpisodes, setPageLocations } from '../../../actions'
import { PATH_LOCATION, PATH_EPISODE, PATH_CHARACTER } from '../../../constants'

function Pagination ({ info }) {
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const currentPageCharacters = useSelector(
    state => state.character.pageCharacters,
  )
  const currentPageEpisodes = useSelector(
    state => state.episode.pageEpisodes,
  )
  const currentPageLocations = useSelector(
    state => state.location.pageLocations,
  )

  function definingPage () {
    if (pathname === PATH_CHARACTER) {
      return { currentPage: currentPageCharacters }
    } else if (pathname === PATH_EPISODE) {
      return { currentPage: currentPageEpisodes }
    } else if (pathname === PATH_LOCATION) {
      return { currentPage: currentPageLocations }
    }
  }

  const { currentPage } = definingPage()
  const { count } = info || 200

  const { pagination } = createPagination({
    numberOfArticles: count || 200,
    articlesPerPage: 20,
    numberOfButtons: 8,
    currentPage,
  })

  const handleClick = page => () => {
    if (pathname === PATH_CHARACTER) {
      dispatch(setPageCharacters(page))
    } else if (pathname === PATH_EPISODE) {
      dispatch(setPageEpisodes(page))
    } else if (pathname === PATH_LOCATION) {
      dispatch(setPageLocations(page))
    }
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li
          className={`${
            pagination[0] === currentPage ? 'disabled __show' : 'false __show'
          }`}
          onClick={handleClick(currentPage - 1)}
        >
          Prev
        </li>
        {pagination.map((page, index) => (
          <li
            key={index}
            className={`${currentPage === page && 'active'}`}
            onClick={handleClick(page)}
          >
            {page}
          </li>
        ))}
        <li
          className={`${
            pagination.reverse()[0] === currentPage
              ? 'disabled __show'
              : 'false __show'
          }`}
          onClick={handleClick(currentPage + 1)}
        >
          Next
        </li>
      </ul>
    </div>
  )
}

export default Pagination
