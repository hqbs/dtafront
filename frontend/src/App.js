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
import Contact from './components/pages/contact/contact'
// import Join from './components/pages/join/join'
import OfficeHours from './components/pages/feature-officehours/feature-officehours'
import Tools from './components/pages/toolbelt/toolbelt'
import About from './components/pages/about/about'

import { Switch, Route, useHistory } from 'react-router-dom'

const IP = '35.192.87.46:4000'

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
  const [isAuth, setIsAuth] = useState(false)
  const history = useHistory()

  useEffect(() => {
    // Checking if we have a Token Cookie
    if (getCookie('token') !== '' && getCookie('email') !== '') {
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
            setIsAuth(true)
          } else {
            showSnackbar('Expired Token. Please Login Again!')
          }
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      isAuthenticated = false
      setIsAuth(false)
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
          setIsAuth(true)
          history.push('/')
          showSnackbar('Successful Login!')
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
    setIsAuth(false)
    history.push('/')
    showSnackbar('Successfully signed out!')
  }

  function create (fname, lname, phone, email, password) {
    axios
      .get(
        'http://' +
          IP +
          '/graphql?query=mutation+_{createUser(fname:"' +
          fname +
          '",lname:"' +
          lname +
          '",email:"' +
          email +
          '",phonenumber:"' +
          phone +
          '",type:"Student",password:"' +
          password +
          '"){success errors token}}'
      )
      .then(res => {
        console.log(res)
        const data = res.data.data.createUser

        // const errors = data.errors
        const success = data.success
        const token = data.token

        if (success) {
          setCookie('token', token, 1)
          setCookie('email', email, 1)
          isAuthenticated = true
          setIsAuth(true)
          history.push('/')
          showSnackbar('Account Created!')
        } else {
          console.log(res)
        }

        // showSnackbar('Login Successfull!')
      })
      .catch(err => {
        console.log(err)
        if (err.message === 'Network Error') {
          showSnackbar('Server currently down. Could be an outage.')
        }

        console.log(err)
      })
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
    <Route>{isAuth === true ? <Component /> : () => ''}</Route>
  )

  return (
    <div className='page-container'>
      <Navigation isAuthenticated={isAuth} signout={signout} />
      <div className='content-wrap'>
        <Switch>
          {isAuthenticated ? (
            <Route path='/create'>
              <Create showSnackbar={showSnackbar} />
            </Route>
          ) : (
            <Route path='/create'>
              {isAuthenticated ? (
                () => history.push('/')
              ) : (
                <Login auth={auth} />
              )}
            </Route>
          )}
          {/* {isAuthenticated ? (
            <PrivateRoute path='/join' component={Join} />
          ) : (
            <Route path='/join'>
              {isAuthenticated ? (
                () => history.push('/')
              ) : (
                <Login auth={auth} />
              )}
            </Route>
          )} */}

          <PrivateRoute path='/officehours' component={OfficeHours} />
          <PrivateRoute path='/tools' component={Tools} />

          <Route path='/login'>
            {isAuthenticated ? () => history.push('/') : <Login auth={auth} />}
          </Route>
          <Route path='/signup'>
            {isAuthenticated ? (
              () => history.push('/')
            ) : (
              <Signup create={create} />
            )}
          </Route>
          <Route path='/forgot'>
            {isAuthenticated ? () => history.push('/') : <Forgot />}
          </Route>

          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact showSnackbar={showSnackbar} />
          </Route>
          <Route path='/status'>
            <Status />
          </Route>
          <Route path='/'>{isAuthenticated ? <Servers /> : <Landing />}</Route>
        </Switch>
        <div id='snackbar'>{snackMessage}</div>
        <Footer />
      </div>
    </div>
  )
}

export default App
