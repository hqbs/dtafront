import React from 'react'
import './App.css'
import Navigation from './components/navigation/navigation'
import Landing from './components/pages/landing/landing'
import Footer from './components/footer/footer'
import Login from './components/pages/login/login'
import Signup from './components/pages/signup/signup'
import Forgot from './components/pages/forgot/forgot'
import Servers from './components/pages/servers/servers'
import Status from './components/pages/status/status'
import Create from './components/pages/create/create'
import Join from './components/pages/join/join'
import TA from './components/pages/feature-ta/feature-ta'

import { Switch, Route, useHistory } from 'react-router-dom'
// const cookie = require('cookie');

let isAuthenticated = true

function App () {
  const history = useHistory()

  function auth (cb) {
    isAuthenticated = true
    setTimeout(() => history.push('/'), 100) // fake async
  }

  function signout (cb) {
    isAuthenticated = false
    setTimeout(() => history.push('/'), 100) // fake async
  }

  const PrivateRoute = ({ component: Component }) => (
    <Route>
      {isAuthenticated === true ? <Component /> : () => history.push('/login')}
    </Route>
  )

  return (
    <div>
      <Navigation isAuthenticated={isAuthenticated} signout={signout} />
      <Switch>
        <PrivateRoute path='/create' component={Create} />
        <PrivateRoute path='/join' component={Join} />
        <PrivateRoute path='/ta' component={TA} />

        <Route path='/login'>
          {isAuthenticated ? () => history.push('/') : <Login auth={auth} />}
        </Route>
        <Route path='/signup'>
          {isAuthenticated ? () => history.push('/') : <Signup />}
        </Route>
        <Route path='/forgot'>
          {isAuthenticated ? () => history.push('/') : <Forgot />}
        </Route>

        <Route path='/status'>
          <Status />
        </Route>

        <Route path='/'>{isAuthenticated ? <Servers /> : <Landing />}</Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
