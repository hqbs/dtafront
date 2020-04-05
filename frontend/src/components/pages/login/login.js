import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Login ({ auth }) {
  const [emailError, setemailError] = useState(false)
  const [accountError, setaccountError] = useState(false)

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  function validate () {
    const emailSymbols = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if (email === '' || !email.match(emailSymbols)) {
      setemailError(true)
    } else {
      setemailError(false)
      // Phone Number Check
      if (password === '' || password.length < 14 || password.length > 350) {
        setaccountError(true)
      } else {
        setaccountError(false)
        success('no token yet')
      }
    }
  }

  function success (token) {
    // Implement Setting Token
    auth()
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className='login-container'>
        <h2>Login</h2>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' name='email' placeholder='Email' />
        {emailError ? (
          <span style={{ color: 'red' }}>
            Not a valid email!
            <br />
            <br />
          </span>
        ) : (
          ''
        )}
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
        />
        {accountError ? (
          <span style={{ color: 'red' }}>
            Something is wrong with your email and/or password!
            <br />
            <br />
          </span>
        ) : (
          ''
        )}

        <center>
          <button
            onClick={validate}
            style={{ width: '48%', marginRight: '4%' }}
          >
            Login
          </button>
          <Link to='/signup'>
            <button style={{ width: '48%' }}>Signup</button>
          </Link>
          <p>
            Forgot your password?{' '}
            <Link className='hyperlinks' to='/forgot'>
              Click here
            </Link>{' '}
            to reset it!
          </p>
        </center>
      </div>
      <div className='waveWrapper waveAnimation'>
        <div className='waveWrapperInner bgTop'>
          <div
            className='wave waveTop'
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-top.png')"
            }}
          ></div>
        </div>
        <div className='waveWrapperInner bgMiddle'>
          <div
            className='wave waveMiddle'
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"
            }}
          ></div>
        </div>
        <div className='waveWrapperInner bgBottom'>
          <div
            className='wave waveBottom'
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"
            }}
          ></div>
        </div>
      </div>
      <div className='bg' />
    </div>
  )
}

export default Login
