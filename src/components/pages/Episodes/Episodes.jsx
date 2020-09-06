import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEpisodes } from '../../../actions'
import DataList from '../../blocks/DataList/DataList'
import Loader from '../../blocks/Loader/Loader'
import Pagination from '../../controls/Pagination/Pagination'

function Episodes () {
  const dispatch = useDispatch()
  const episodesList = useSelector(state => state.episode.listEpisodes)
  const currentPage = useSelector(state => state.episode.pageEpisodes)
  const loading = useSelector(state => state.episode.loading)

  useEffect(() => {
    dispatch(fetchEpisodes(`?page=${currentPage}`))
  }, [dispatch, currentPage])

  return (
    <section className="content">
      <div className="content__block">
        <Pagination data={episodesList} />

        {loading
          ? <Loader />
          : <DataList episode={episodesList.results} />}
      </div>
    </section>
  )
}

export default Episodes
