import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { store } from './store'
import Header from './components/blocks/Header/Header'
import Router from './Router'
import { theme } from './theme/theme'

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Page = styled.section`
  min-height: 100vh;
  display: flex;
  padding: 20px 0;
`

function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Wrapper>
            <Page>
              <Header />
              <Router />
            </Page>
          </Wrapper>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
