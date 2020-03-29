import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

function Login () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className='login-container'>
        <h2>Signup</h2>
        <label for='fname'>First Name</label>
        <input type='text' id='fname' name='fname' placeholder='First Name' />

        <label for='fname'>Last Name</label>
        <input type='text' id='lname' name='lname' placeholder='Last Name' />

        <label for='fname'>School Email</label>
        <input type='text' id='email' name='email' placeholder='Email' />

        <label for='fname'>Phone Number</label>
        <input
          type='text'
          id='phonenumber'
          name='phonenumber'
          placeholder='Phone Number'
        />

        <label for='lname'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
        />

        <label for='lname'>Confirm Password</label>
        <input
          type='password'
          id='cpassword'
          name='cpassword'
          placeholder='Password'
        />

        <center>
          <Link to='/'>
            <button style={{ width: '100%' }}>Create Account</button>
          </Link>
          <p>
            Already have an account?{' '}
            <Link className='hyperlinks' to='/login'>
              Click here
            </Link>{' '}
            to login!
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
      <div className='bg' style={{ height: '1200px' }} />
    </div>
  )
}

export default Login
