import { PATH_CHARACTER } from '../../../../constants'

export function configCharacterList (list) {
  return (
    list && {
      title: ['Name', 'Species', 'Origin'],
      path: PATH_CHARACTER,
      list: list.map(i => ({
        params: {
          name: i.name,
          species: i.species,
          origin: i.origin.name,
        },
        image: i.image,
        id: i.id,
      })),
    }
  )
}

export function configCharacterPage (desiredCharacter, list) {
  return (
    Object.keys(desiredCharacter).length !== 0 && {
      image: desiredCharacter.image,
      params: {
        name: desiredCharacter.name,
        gender: desiredCharacter.gender,
        species: desiredCharacter.species,
        origin: desiredCharacter.origin.name,
        status: desiredCharacter.status,
      },
      list,
      title: 'List of episodes with this character',
    }
  )
}
