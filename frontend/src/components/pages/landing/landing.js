import React from 'react'
import Image3 from '../../../images/class.svg'

import { Link } from 'react-router-dom'

function landing () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  return (
    <div>
      <div className='container-about'>
        <div
          className='create-container-about'
          style={{
            backgroundColor: 'rgba(0,0,0,0)',
            border: '0px solid rgba(0,0,0,0)',
            boxShadow: '0 0 0 rgba(0,0,0,0)'
          }}
        >
          <h4
            style={{
              fontWeight: '500',
              letterSpacing: '.2px',
              marginTop: '40px'
            }}
          >
            TEACH FROM HOME
          </h4>
          <h1
            style={{
              fontWeight: '500',
              letterSpacing: '.5px',
              fontSize: '48px',
              margin: 0
            }}
          >
            Academe<span style={{ color: '#5b5dee' }}>Space</span> makes
            distance learning easy, from anywhere
          </h1>
          <h4
            style={{
              fontWeight: '400',
              marginTop: '10px',
              fontSize: '18px'
            }}
          >
            With our Discord Bot and Web Portal, classroom functions are all
            built in. From automating office hour lines to forming groups. We
            will walk you through the process all the way.
          </h4>
          <Link to='/about'>
            <button className='button-alt' style={{ padding: '25px 40px' }}>
              LEARN MORE
            </button>
          </Link>
          <button style={{ marginLeft: '10px', padding: '25px 40px' }}>
            CONTACT US
          </button>
          <h5
            style={{
              fontWeight: '600',
              marginTop: '0',
              fontSize: '14px'
            }}
          >
            Need to create a classroom?{' '}
            <Link
              to='/signup'
              style={{ textDecoration: 'underline', color: '#5b5dee' }}
            >
              Get Started
            </Link>
          </h5>
        </div>
        <div className='create-container-image'>
          <center>
            <img
              alt='lady standing up with other peeps in bubbles'
              src={Image3}
              width='98%'
              style={{ marginTop: '30px' }}
            />
          </center>
        </div>
      </div>
    </div>
  )
}

export default landing
