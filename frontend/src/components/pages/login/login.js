import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Login () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className='login-container'>
        <h2>Login</h2>
        <label for='fname'>Email</label>
        <input type='text' id='femail' name='email' placeholder='Email' />

        <label for='lname'>Password</label>
        <input
          type='password'
          id='lpassword'
          name='password'
          placeholder='Password'
        />

        <center>
          <Link to='/servers'>
            <button style={{ width: '48%', marginRight: '4%' }}>Login</button>
          </Link>
          <Link to='/signup'>
            <button style={{ width: '48%' }}>Need an Account?</button>
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
      <div class='waveWrapper waveAnimation'>
        <div class='waveWrapperInner bgTop'>
          <div
            class='wave waveTop'
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-top.png')"
            }}
          ></div>
        </div>
        <div class='waveWrapperInner bgMiddle'>
          <div
            class='wave waveMiddle'
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"
            }}
          ></div>
        </div>
        <div class='waveWrapperInner bgBottom'>
          <div
            class='wave waveBottom'
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
