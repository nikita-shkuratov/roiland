import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchEpisodes } from '../../../actions'
import { PATH_EPISODE } from '../../../constants'
import DataList from '../../blocks/DataList/DataList'
import Loader from '../../blocks/Loader/Loader'
import Pagination from '../../controls/Pagination/Pagination'

function Episodes () {
  const dispatch = useDispatch()
  const episodesList = useSelector(state => state.episode.listEpisodes)
  const currentPage = useSelector(state => state.episode.pageEpisodes)
  const loading = useSelector(state => state.episode.loading)
  const loaded = useSelector(state => state.episode.loaded)

  useEffect(() => {
    dispatch(fetchEpisodes(`?page=${currentPage}`))
  }, [dispatch, currentPage])

  const { results, info } = episodesList

  return (
    <section className="content">
      <div className="content__block">
        <Pagination
          info={info} />

        {loading ? (
          <Loader />
        ) : (
          <ul>
            {results && results.map(item => (
              <Link to={`${PATH_EPISODE}${item.id}`} key={item.id}>
                <DataList data={item} />
              </Link>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Episodes
