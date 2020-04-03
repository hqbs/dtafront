import React from 'react'
import { Link } from 'react-router-dom'

function create () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  return (
    <div>
      <h1 style={{ margin: '100px auto 10px auto', textAlign: 'center' }}>
        Create a Classroom
      </h1>
      <div className='login-container' style={{ marginTop: 0, width: '600px' }}>
        <label for='fname'>Classroom Name</label>
        <input
          type='text'
          id='classname'
          name='classname'
          placeholder='Database Systems...'
        />

        <label for='fname'>Class Code</label>
        <input
          type='text'
          id='classname'
          name='classname'
          placeholder='CS 260...'
        />

        <label for='fname'>Section</label>
        <input
          type='text'
          id='classname'
          name='classname'
          placeholder='001...'
        />

        <label for='fname'>Access</label>
        <div className='create-classroom-container'>
          <div className='create-classroom'>
            <h3>Public</h3>
            <h5 style={{ margin: '0', padding: '0', fontWeight: '400' }}>
              Anyone can join the server.
            </h5>
          </div>
          <div className='create-classroom'>
            <h3>Private</h3>
            <h5 style={{ margin: '0', padding: '0', fontWeight: '400' }}>
              Students need a special key and/or email to access classroom.
            </h5>
          </div>
        </div>

        <label for='fname'>Enviornment</label>
        <div className='create-classroom-container'>
          <div
            className='create-classroom'
            style={{ height: '20px', padding: '10px', width: '115px' }}
          >
            <h4 style={{ margin: 0 }}>Discord</h4>
            {/* <img src={DiscordLogo} width='80px' /> */}
          </div>
          <div
            className='create-classroom'
            style={{ height: '20px', padding: '10px', width: '115px' }}
          >
            <h4 style={{ margin: 0 }}>Slack</h4>
            {/* <img src={DiscordLogo} width='80px' /> */}
          </div>
          <div
            className='create-classroom'
            style={{ height: '20px', padding: '10px', width: '115px' }}
          >
            <h4 style={{ margin: 0 }}>AcademeSpace</h4>
            {/* <img src={DiscordLogo} width='80px' /> */}
          </div>
        </div>

        <center>
          <Link to='/servers'>
            <button
              className='button-alt'
              style={{ width: '100%', height: '60px', marginTop: '10px' }}
            >
              Create Classroom
            </button>
          </Link>
        </center>
      </div>
    </div>
  )
}

export default create
