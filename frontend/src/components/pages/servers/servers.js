import React from 'react'
import { Link } from 'react-router-dom'

function Servers () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  return (
    <div>
      <h1 style={{ margin: '100px auto 10px auto', textAlign: 'center' }}>
        My Classrooms{' '}
        <Link to='/create'>
          <button
            style={{
              fontSize: '12px',
              marginTop: '0px',
              padding: '3px 10px',
              top: '0'
            }}
          >
            Create
          </button>
        </Link>
      </h1>
      <div className='server-container'>
        <div className='server'>
          <h3>Computer Systems</h3>
          <h5 style={{ margin: '0', padding: '0' }}>CS 252</h5>
          <p style={{ fontSize: '11px' }}>Section: 001</p>
        </div>
        <div className='server'>
          <h3>Computer Systems</h3>
          <h5 style={{ margin: '0', padding: '0' }}>CS 252</h5>
          <p style={{ fontSize: '11px' }}>Section: 002</p>
        </div>
        <div className='server'>
          <h3>Database Systems</h3>
          <h5 style={{ margin: '0', padding: '0' }}>CS 260</h5>
          <p style={{ fontSize: '11px' }}>Section: 001</p>
        </div>
      </div>
      <h1 style={{ margin: '50px auto 10px auto', textAlign: 'center' }}>
        Joined Classrooms{' '}
        <Link to='/join'>
          <button
            style={{
              fontSize: '12px',
              marginTop: '0px',
              padding: '3px 10px',
              top: '0'
            }}
          >
            Join
          </button>
        </Link>
      </h1>

      <div className='server-container'>
        <div className='server'>
          <h3>Introduction to Biology</h3>
          <h5 style={{ margin: '0', padding: '0' }}>BIO 100</h5>
          <p style={{ fontSize: '11px' }}>Section: 001</p>
        </div>
        <div className='server'>
          <h3>Introduction to Geology</h3>
          <h5 style={{ margin: '0', padding: '0' }}>GEO 101</h5>
          <p style={{ fontSize: '11px' }}>Section: 001</p>
        </div>
      </div>
    </div>
  )
}

export default Servers
