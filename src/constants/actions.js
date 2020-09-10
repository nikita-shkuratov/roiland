const generatorActionName = name => ({
  START: `START_FETCH_${name}`,
  SUCCESS: `SUCCESS_FETCH_${name}`,
  SET_PAGE: `SET_PAGE_${name}`,
})

export const CHARACTERS = generatorActionName('CHARACTERS')
export const CHARACTER = generatorActionName('CHARACTER')

export const LOCATIONS = generatorActionName('LOCATIONS')
export const LOCATION = generatorActionName('LOCATION')

export const EPISODES = generatorActionName('EPISODES')
export const EPISODE = generatorActionName('EPISODE')
