import React from 'react'
import Image1 from '../../../images/picture3.svg'
import Image2 from '../../../images/picture2.svg'
import { Link } from 'react-router-dom'

function landing () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  return (
    <div>
      <div className='container'>
        <div className='create-container-image'>
          <img
            alt='lady standing up with other peeps in bubbles'
            src={Image1}
            width='100%'
          />
        </div>

        <div className='create-container'>
          <h2>Create a Classroom</h2>
          <p>
            If you are a teacher, than creating a classroom is probably for you!
            We will help you quickly setup your classroom in your prefered
            enviornment.
          </p>
          <center>
            <Link to='/create'>
              <button style={{ padding: '10px 30px' }}>Create Classroom</button>
            </Link>
          </center>
        </div>
      </div>
      <div className='container'>
        <div className='create-container'>
          <h2>Join a Classroom</h2>
          <p>
            If you are a student or teaching assistant, than this is the spot
            for you! This will allow you to enter a classroom code in order to
            enter a teachers setup enviornment. It's quick and easy!
          </p>
          <center>
            <Link to='/join'>
              <button href='#about' style={{ padding: '10px 30px' }}>
                Join Classroom
              </button>
            </Link>
          </center>
        </div>

        <div className='create-container-image'>
          <center>
            <img alt='a man setting by a computer' src={Image2} width='80%' />
          </center>
        </div>
      </div>
    </div>
  )
}

export default landing
