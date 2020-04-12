import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

function Login ({ create }) {
  const [fnameError, setfnameError] = useState(false)
  const [lnameError, setlnameError] = useState(false)
  const [emailError, setemailError] = useState(false)
  const [phonenumberError, setphonenumberError] = useState(false)
  const [passwordError, setpasswordError] = useState(false)
  const [cpasswordError, setcpasswordError] = useState(false)

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  function validate () {
    // Regex for Alpha Characters
    const letters = /^[A-Za-z]+$/
    const phoneSymbols = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    const emailSymbols = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    // Field values
    const fname = document.getElementById('fname').value
    const lname = document.getElementById('lname').value
    const email = document.getElementById('email').value
    const phonenumber = document.getElementById('phonenumber').value
    const password = document.getElementById('password').value
    const cpassword = document.getElementById('cpassword').value

    // First Name Check
    if (
      !fname.match(letters) ||
      fname === '' ||
      fname.length < 2 ||
      fname.length > 100
    ) {
      setfnameError(true)
    } else {
      setfnameError(false)
      // Last Name Check
      if (
        !lname.match(letters) ||
        lname === '' ||
        lname.length < 2 ||
        lname.length > 100
      ) {
        setlnameError(true)
      } else {
        setlnameError(false)
        // Email Check
        if (email === '' || !email.match(emailSymbols)) {
          setemailError(true)
        } else {
          setemailError(false)
          // Phone Number Check
          if (phonenumber === '' || !phonenumber.match(phoneSymbols)) {
            setphonenumberError(true)
          } else {
            setphonenumberError(false)
            // Password Check
            if (
              password === '' ||
              password.length < 14 ||
              password.length > 350
            ) {
              setpasswordError(true)
            } else {
              setpasswordError(false)
              // Confirm Password Check
              if (cpassword !== password) {
                setcpasswordError(true)
              } else {
                setcpasswordError(false)

                // Successful Validation!
                createAccount(fname, lname, email, phonenumber, password)
              }
            }
          }
        }
      }
    }
  }

  function createAccount (fname, lname, email, phonenumber, password) {
    // Implement Axios call for Account Creation
    create(fname, lname, phonenumber, email, password)
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className='login-container'>
        <h2>Signup</h2>
        <label htmlFor='fname'>First Name</label>
        <input type='text' id='fname' name='fname' placeholder='First Name' />
        {fnameError ? (
          <span style={{ color: 'red' }}>
            Needs to be at least 2 characters long and only include letters!
            <br />
            <br />
          </span>
        ) : (
          ''
        )}

        <label htmlFor='fname'>Last Name</label>
        <input type='text' id='lname' name='lname' placeholder='Last Name' />
        {lnameError ? (
          <span style={{ color: 'red' }}>
            Needs to be at least 2 characters long and only include letters!
            <br />
            <br />
          </span>
        ) : (
          ''
        )}

        <label htmlFor='fname'>School Email</label>
        <input type='text' id='email' name='email' placeholder='Email' />
        {emailError ? (
          <span style={{ color: 'red' }}>
            Needs to be a valid email!
            <br />
            <br />
          </span>
        ) : (
          ''
        )}

        <label htmlFor='fname'>Phone Number</label>
        <input
          type='text'
          id='phonenumber'
          name='phonenumber'
          placeholder='Phone Number'
        />

        {phonenumberError ? (
          <span style={{ color: 'red' }}>
            Use one of the follow formats: (111) 222 3333, (111).222.3333,
            (111)-222-3333
            <br />
            <br />
          </span>
        ) : (
          ''
        )}

        <label htmlFor='lname'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
        />
        {passwordError ? (
          <span style={{ color: 'red' }}>
            Must at least be 14 characters long.
            <br />
            <br />
          </span>
        ) : (
          ''
        )}

        <label htmlFor='lname'>Confirm Password</label>
        <input
          type='password'
          id='cpassword'
          name='cpassword'
          placeholder='Password'
        />
        {cpasswordError ? (
          <span style={{ color: 'red' }}>
            Password does not match!
            <br />
            <br />
          </span>
        ) : (
          ''
        )}

        <center>
          <button
            style={{ width: '100%' }}
            className='button-alt'
            onClick={validate}
          >
            Create Account
          </button>
          <p>
            Already have an account?{' '}
            <Link className='hyperlinks' to='/login'>
              Click here
            </Link>{' '}
            to login!
          </p>
        </center>
      </div>
      {/* <div className='waveWrapper waveAnimation'>
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
      <div className='bg' style={{ height: '1200px' }} /> */}
    </div>
  )
}

export default Login
