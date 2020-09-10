import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { PATH_CHARACTER, PATH_LOCATION, PATH_EPISODE } from './constants'
import CharactersList from './components/pages/Characters/CharactersList/CharactersList'
import LocationsList from './components/pages/Locations/LocationsList/LocationsList'
import EpisodesList from './components/pages/Episodes/EpisodesList/EpisodesList'
import CharacterPage from './components/pages/Characters/CharacterPage/CharacterPage'
import LocationPage from './components/pages/Locations/LocationPage/LocationPage'
import EpisodePage from './components/pages/Episodes/EpisodePage/EpisodePage'

function Router () {
  return (
    <React.StrictMode>
      <Switch>
        <Route exact path={PATH_CHARACTER} component={CharactersList} />
        <Route path={`${PATH_CHARACTER}:id`} component={CharacterPage} />
        <Route exact path={PATH_LOCATION} component={LocationsList} />
        <Route path={`${PATH_LOCATION}:id`} component={LocationPage} />
        <Route exact path={PATH_EPISODE} component={EpisodesList} />
        <Route path={`${PATH_EPISODE}:id`} component={EpisodePage} />
        <Redirect to={PATH_CHARACTER} />
      </Switch>
    </React.StrictMode>
  )
}

export default Router
