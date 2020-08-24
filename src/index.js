import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './redux/reducers/rootReducer'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import thunk from 'redux-thunk'
import './style/style.scss'
import * as serviceWorker from './serviceWorker'

import Characters from './components/Characters/Characters'
import Locations from './components/Locations/Locations'
import Episodes from './components/Episodes/Episodes'

const store = createStore(rootReducer, applyMiddleware(thunk))

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App>
                    <Switch>
                        <Route exact path='/' component={Characters}/>
                        <Route path='/locations' component={Locations}/>
                        <Route path='/episodes' component={Episodes}/>
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
