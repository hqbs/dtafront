import React from 'react'
import { Link } from 'react-router-dom'

function Login () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

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
            <button style={{ width: '48%' }} className='button-alt'>
              Back
            </button>
          </Link>
        </center>
      </div>
    </div>
  )
}

export default Login
