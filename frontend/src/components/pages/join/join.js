import React from 'react'
import { Link } from 'react-router-dom'

function Join () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  return (
    <div>
      <h1 style={{ margin: '100px auto 10px auto', textAlign: 'center' }}>
        Join a Classroom
      </h1>
      <div className='login-container' style={{ marginTop: 0, width: '600px' }}>
        <label htmlFor='classname'>Classroom Invite Code</label>
        <input
          type='text'
          id='classname'
          name='classname'
          placeholder='983298fhehaflih8h283hfa389h...'
        />

        <center>
          <Link to='/'>
            <button
              className='button-alt'
              style={{ width: '100%', height: '60px', marginTop: '10px' }}
            >
              Join Classroom
            </button>
          </Link>
        </center>
      </div>
    </div>
  )
}

export default Join
