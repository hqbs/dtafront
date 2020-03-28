import React from 'react'
import { Link } from 'react-router-dom'

function Login () {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className='login-container'>
        <h2>Forgot Password</h2>
        <p>
          If you forgot your password, enter your email and we will send an
          email to reset it!
        </p>
        <label for='fname'>Email</label>
        <input type='text' id='femail' name='email' placeholder='Email' />

        <center>
          <button style={{ width: '48%', marginRight: '4%' }}>
            Reset Password
          </button>
          <Link to='/login'>
            <button style={{ width: '48%' }}>Back</button>
          </Link>
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
