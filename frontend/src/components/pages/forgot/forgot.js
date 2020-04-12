import React from 'react'
import { Link } from 'react-router-dom'

function Login () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className='create-container-about' style={{ height: 0 }}>
        <h2> </h2>
        <p></p>
      </div>
      <center>
        <h1 style={{ fontSize: '48px' }}>Forgot Password</h1>
      </center>
      <div className='login-container'>
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
