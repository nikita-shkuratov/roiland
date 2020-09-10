import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEpisodes } from '../../../../actions'
import DataList from '../../../blocks/DataList/DataList'
import Loader from '../../../blocks/Loader/Loader'
import Pagination from '../../../controls/Pagination/Pagination'
import { configEpisodeList } from '../configCreator/configCreatorForEpisode'

function EpisodesList () {
  const dispatch = useDispatch()
  const episodesList = useSelector(state => state.episode.list)
  const currentPage = useSelector(state => state.episode.page)
  const loading = useSelector(state => state.episode.loading) || episodesList.length === 0

  useEffect(() => {
    dispatch(fetchEpisodes(`?page=${currentPage}`))
  }, [dispatch, currentPage])

  const episodeConfig = configEpisodeList(episodesList.results)

  return (
    <section className="content">
      <div className="content__block">
        <Pagination data={episodesList} />

        {loading
          ? <Loader />
          : <DataList data={episodeConfig} />}
      </div>
    </section>
  )
}

export default EpisodesList
