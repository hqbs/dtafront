import React from 'react'
import { Link } from 'react-router-dom'

function Navigation () {
  return (
    <div>
      <ul className='navigation-ul'>
        <li className='navigation-li'>
          <Link className='logo' to='/'>
            Educo<span style={{ color: '#5b5dee' }}>Space</span>
          </Link>
        </li>
        <li
          className='navigation-li'
          style={{ float: 'right', marginRight: '10px' }}
        >
          <Link className='navigation-li' to='/signup'>
            <button style={{ margin: '14px 4px' }}>Signup</button>
          </Link>
        </li>
        <li className='navigation-li' style={{ float: 'right' }}>
          <Link to='/login'>
            <button style={{ margin: '14px 4px' }}>Login</button>
          </Link>
        </li>
        <li className='navigation-li' style={{ float: 'right' }}>
          <Link className='nav-button' to='/join'>
            Join a Classroom
          </Link>
        </li>
        <li className='navigation-li' style={{ float: 'right' }}>
          <Link className='nav-button' to='/create'>
            Create a Classroom
          </Link>
        </li>
        <li className='navigation-li' style={{ float: 'right' }}>
          <Link className='nav-button' to='/documentation'>
            Documentation
          </Link>
        </li>
        <li className='navigation-li' style={{ float: 'right' }}>
          <Link className='nav-button' to='/about'>
            About
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
