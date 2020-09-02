import React from 'react'
import Header from './components/blocks/Header/Header'
import Router from './Router'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="wrapper">
          <main className="page">
            <Header />
            <Router />
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
