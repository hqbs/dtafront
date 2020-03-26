import React from 'react'
import './App.css'
import Navigation from './components/navigation/navigation'
import Landing from './components/pages/landing/landing'
import Footer from './components/footer/footer'

function App () {
  return (
    <div>
      <Navigation />
      <Landing />
      <Footer />
    </div>
  )
}

export default App
