import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEpisodes } from '../../../../actions'
import DataList from '../../../blocks/DataList/DataList'
import Loader from '../../../blocks/Loader/Loader'
import Pagination from '../../../controls/Pagination/Pagination'
import { configEpisodeList } from '../../../../helpers/configCreator/configEpisode'
import { Content, ContentBlock } from '../../styles'

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
    <Content>
      <ContentBlock>
        {loading
          ? <Loader />
          : (
            <>
              <Pagination data={episodesList.info} />
              <DataList data={episodeConfig} />
            </>)}
      </ContentBlock>
    </Content>
  )
}

export default EpisodesList
