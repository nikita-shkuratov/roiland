import { PATH_LOCATION } from '../../constants'
import locationIco from '../../img/location-ico.png'
import locationImage from '../../img/card-loc.jpg'

export function configLocationList (list) {
  return (
    list && {
      title: ['Name', 'Type', 'Dimension'],
      path: PATH_LOCATION,
      list: list.map(i => ({
        params: {
          name: i.name,
          type: i.type,
          dimension: i.dimension,
        },
        image: locationIco,
        id: i.id,
      })),
    }
  )
}

export function configLocationPage (desiredEpisode, list) {
  return (
    Object.keys(desiredEpisode).length !== 0 && {
      image: locationImage,
      params: {
        name: desiredEpisode.name,
        type: desiredEpisode.type,
        dimension: desiredEpisode.dimension,
      },
      list,
      title: 'List of characters with this location',
    }
  )
}
