import React, { useEffect, useState } from 'react'
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

const IP = '35.226.72.159:4000'

let isAuthenticated
// axios.defaults.withCredentials = true

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

function setCookie (cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000) //
  var expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

function App () {
  const [snackMessage, setSnackMessage] = useState('')
  const history = useHistory()

  useEffect(() => {
    // Checking if we have a Token Cookie
    if (getCookie('token') !== null && getCookie('email') !== null) {
      // If we do, make a call
      axios
        .get(
          'http://' +
            IP +
            '/graphql?query={validateUserToken(email:"' +
            getCookie('email') +
            '",currenttoken:"' +
            getCookie('token') +
            '")}'
        )
        .then(res => {
          if (res.data.data.validateUserToken) {
            isAuthenticated = true
            history.push('/')
          } else {
            showSnackbar('Expired Token. Please Login Again!')
          }
        })
        .catch(err => {
          // isAuthenticated = true
          console.log(err)
          // console.log('Bad Token')
        })
    } else {
      isAuthenticated = false
    }
  }, [history])

  function auth (email, password) {
    axios
      .get(
        'http://' +
          IP +
          '/graphql?query={login(email:"' +
          email +
          '",password:"' +
          password +
          '",token:" "){success errors token}}'
      )
      .then(res => {
        const data = res.data.data.login
        const errors = data.errors
        const success = data.success
        const token = data.token

        if (success) {
          setCookie('token', token, 1)
          setCookie('email', email, 1)
          isAuthenticated = true
          history.push('/')
          showSnackbar('Successfully Login!')
        } else {
          showSnackbar(errors)
        }

        console.log(res)
        // showSnackbar('Login Successfull!')
      })
      .catch(err => {
        if (err.message === 'NetwError') {
          showSnackbar('Server currently down. Could be an outage.')
        }

        console.log(err.message)
      })
  }

  function signout () {
    deleteCookie('token')
    deleteCookie('email')
    isAuthenticated = false
    history.push('/')
    showSnackbar('Successfully signed out!')
  }

  function showSnackbar (message) {
    // Get the snackbar DIV
    var x = document.getElementById('snackbar')
    setSnackMessage(message)

    // Add the "show" class to DIV
    x.className = 'show'

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className.replace('show', '')
    }, 3000)
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
      <div id='snackbar'>{snackMessage}</div>
      <Footer />
    </div>
  )
}

export default App
