import React from 'react'
import Header from './components/Header/Header'

function App({ children }) {
  return (
    <div className="wrapper">
      <main className="page">
        <Header />
        {children}
      </main>
    </div>
  )
}

export default App
