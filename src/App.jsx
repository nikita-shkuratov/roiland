import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/blocks/Header/Header'
import { Layout, GlobalStyle } from './styles'
import Router from './Router'
import { store } from './store'

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Layout>
          <Header />
          <Router />
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
