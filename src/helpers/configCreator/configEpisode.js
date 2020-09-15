import { PATH_EPISODE } from '../../constants'
import episodeIco from '../../style/img/play-ico.png'
import episodeImage from '../../style/img/card-epis.jpg'

export function configEpisodeList (list) {
  return (
    list && {
      title: ['Name', 'Episode', 'Air date'],
      path: PATH_EPISODE,
      list: list.map(i => ({
        params: {
          name: i.name,
          episode: i.episode,
          air_date: i.air_date,
        },
        image: episodeIco,
        id: i.id,
      })),
    }
  )
}

export function configEpisodePage (desiredEpisode, list) {
  return (
    Object.keys(desiredEpisode).length !== 0 && {
      image: episodeImage,
      params: {
        name: desiredEpisode.name,
        episode: desiredEpisode.episode,
        air_date: desiredEpisode.air_date,
      },
      list,
      title: 'List of characters with this episode',
    }
  )
}
