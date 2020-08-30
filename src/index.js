import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './redux/reducers/rootReducer'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { PATH_CHARACTER, PATH_LOCATION, PATH_EPISODE } from './constRotePath'
import App from './App'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker'
import './style/style.scss'

import Characters from './components/Characters/Characters'
import CharacterPage from './components/Characters/CharacterPage/CharacterPage'
import Locations from './components/Locations/Locations'
import LocationPage from './components/Locations/LocationPage/LocationPage'
import Episodes from './components/Episodes/Episodes'
import EpisodePage from './components/Episodes/EpisodePage/EpisodePage'

const store = createStore(rootReducer, applyMiddleware(thunk))

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App>
                    <Switch>
                        <Route exact path={PATH_CHARACTER} component={Characters} />
                        <Route path={`${PATH_CHARACTER}:id`} component={CharacterPage} />
                        <Route exact path={PATH_LOCATION} component={Locations} />
                        <Route path={`${PATH_LOCATION}:id`} component={LocationPage} />
                        <Route exact path={PATH_EPISODE} component={Episodes} />
                        <Route path={`${PATH_EPISODE}:id`} component={EpisodePage} />
                        <Redirect to={PATH_CHARACTER} />
                    </Switch>
                </App>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
)

render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
