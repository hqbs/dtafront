import React from 'react'
import './App.css'
import Navigation from './components/navigation/navigation'
import Landing from './components/pages/landing/landing'
import Footer from './components/footer/footer'
import Login from './components/pages/login/login'
import Signup from './components/pages/signup/signup'
import Forgot from './components/pages/forgot/forgot'
import Servers from './components/pages/servers/servers'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/forgot'>
          <Forgot />
        </Route>
        <Route path='/servers'>
          <Servers />
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
