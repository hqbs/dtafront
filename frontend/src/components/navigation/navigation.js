import React from 'react'

function Navigation () {
  return (
    <div>
      <ul>
        <li>
          <a className='logo' href='#home'>
            Hack Quarantine
          </a>
        </li>
        <li style={{ float: 'right', marginRight: '10px' }}>
          <button href='#about'>Signup</button>
        </li>
        <li style={{ float: 'right' }}>
          <button href='#about'>Login</button>
        </li>
        <li style={{ float: 'right' }}>
          <a className='nav-button' href='#about'>
            Join a Classroom
          </a>
        </li>
        <li style={{ float: 'right' }}>
          <a className='nav-button' href='#about'>
            Create a Classroom
          </a>
        </li>
        <li style={{ float: 'right' }}>
          <a className='nav-button' href='#about'>
            Documentation
          </a>
        </li>
        <li style={{ float: 'right' }}>
          <a className='nav-button' href='#about'>
            About
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
