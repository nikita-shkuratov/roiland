import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import propTypes from 'prop-types'
import { PaginationContainer, PaginationList, LiPrev, LiNumbers, LiNext } from './styles'
import { createPagination } from '../../../helpers/createPagination/createPagination'
import { setPageCharacters, setPageEpisodes, setPageLocations } from '../../../actions'
import { PATH_LOCATION, PATH_EPISODE, PATH_CHARACTER } from '../../../constants'

function Pagination ({ data: { count } }) {
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const currentPageCharacter = useSelector(state => state.character.page)
  const currentPageEpisode = useSelector(state => state.episode.page)
  const currentPageLocation = useSelector(state => state.location.page)

  function definingPage () {
    if (pathname === PATH_CHARACTER) {
      return { currentPage: currentPageCharacter }
    } else if (pathname === PATH_EPISODE) {
      return { currentPage: currentPageEpisode }
    } else if (pathname === PATH_LOCATION) {
      return { currentPage: currentPageLocation }
    }
  }

  const { currentPage } = definingPage()

  const { pagination } = createPagination({
    numberOfArticles: count,
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
    <PaginationContainer>
      <PaginationList>
        <LiPrev
          disabled={pagination[0] === currentPage}
          onClick={handleClick(currentPage - 1)}
        >
          Prev
        </LiPrev>
        {pagination.map((page, index) => (
          <LiNumbers
            key={index}
            active={currentPage === page}
            onClick={handleClick(page)}
          >
            {page}
          </LiNumbers>
        ))}
        <LiNext
          disabled={pagination.reverse()[0] === currentPage}
          onClick={handleClick(currentPage + 1)}
        >
          Next
        </LiNext>
      </PaginationList>
    </PaginationContainer>
  )
}

Pagination.propTypes = {
  data: propTypes.object,
  count: propTypes.number,
}

export default Pagination
