import React from 'react'

function Navigation () {
  return (
    <div>
      <ul className='navigation-ul'>
        <li className='navigation-li'>
          <a className='logo' href='#home'>
            Hack
            <span style={{ color: '#5b5dee' }}>Quarantine</span>
          </a>
        </li>
        <li
          className='navigation-li'
          style={{ float: 'right', marginRight: '10px' }}
        >
          <button href='#about'>Signup</button>
        </li>
        <li className='navigation-li' style={{ float: 'right' }}>
          <button href='#about'>Login</button>
        </li>
        <li className='navigation-li' style={{ float: 'right' }}>
          <a className='nav-button' href='#about'>
            Join a Classroom
          </a>
        </li>
        <li className='navigation-li' style={{ float: 'right' }}>
          <a className='nav-button' href='#about'>
            Create a Classroom
          </a>
        </li>
        <li className='navigation-li' style={{ float: 'right' }}>
          <a className='nav-button' href='#about'>
            Documentation
          </a>
        </li>
        <li className='navigation-li' style={{ float: 'right' }}>
          <a className='nav-button' href='#about'>
            About
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
