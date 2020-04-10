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
            Creating a classroom is typically for teachers or professors, but
            can be utlized in other functions as well. As a classroom owner, you
            will get access to a vast amount of tools to help with distance
            learning. We will even set up your Discord Server for you!
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
            Joining a classroom is typically for students. As a student, we will
            get the chance to use some of our built in integrations in order to
            make learning easier. Things like office hours will all be automated
            within Discord.
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
