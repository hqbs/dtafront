import React, { useEffect } from 'react'
import axios from 'axios'

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

let isAuthenticated
axios.defaults.withCredentials = true

// Get Cookie function found on W3schools.com since it works!
function getCookie (cname) {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

function deleteCookie (name) {
  document.cookie = name + '=; Max-Age=-99999999;'
}

function App () {
  const history = useHistory()

  useEffect(() => {
    // Checking if we have a Token Cookie
    if (getCookie('token') !== null && getCookie('token').trim() !== '') {
      // If we do, make a call
      axios
        .post('http://localhost:8001/validate')
        .then(res => {
          isAuthenticated = true
          history.push('/')
        })
        .catch(err => {
          isAuthenticated = true
          console.log(err)
          console.log('Bad Token')
        })
    } else {
      isAuthenticated = false
    }
  }, [history])

  function auth (email, password) {
    axios
      .post('http://localhost:8001/login', { email: email, password: password })
      .then(res => {
        isAuthenticated = true
        history.push('/')
      })
      .catch(err => {
        console.log(err)
        console.log('Wrong Details')
      })
  }

  function signout () {
    deleteCookie('token')
    isAuthenticated = false
    history.push('/')
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
