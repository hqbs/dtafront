import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Toolbelt () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  useEffect(() => {
    var coll = document.getElementsByClassName('tool')
    var i

    for (i = 0; i < coll.length; i++) {
      coll[i].children[0].nextElementSibling.style.display = 'inherit'
      //   coll[i].children[0].addEventListener('click', function () {
      //     var content = this.nextElementSibling
      //     if (content.style.display === 'inherit') {
      //       content.style.display = 'none'
      //     } else {
      //       content.style.display = 'inherit'
      //     }
      //   })
    }
  }, [])

  return (
    <div>
      <h2 style={{ margin: '100px auto 0px auto', textAlign: 'center' }}>
        Informational
      </h2>
      <div className='tool-container'>
        <div className='tool'>
          <div className='tool-header-1'>
            <h3>Class list</h3>
          </div>
          <div className='tool-content'>
            <center>
              <Link to='/'>
                <button
                  style={{ width: '50%', height: '40px', marginTop: '10px' }}
                >
                  Browse
                </button>
              </Link>
            </center>
          </div>
        </div>
        <div className='tool'>
          <div className='tool-header-1'>
            <h3>Class Feedack</h3>
          </div>
          <div className='tool-content'>
            <center>
              <Link to='/'>
                <button
                  style={{ width: '50%', height: '40px', marginTop: '10px' }}
                >
                  Browse
                </button>
              </Link>
            </center>
          </div>
        </div>
      </div>
      <h2 style={{ margin: '0px auto 0px auto', textAlign: 'center' }}>
        Tools
      </h2>
      <div className='tool-container'>
        <div className='tool'>
          <div className='tool-header-1'>
            <h3>Office Hours</h3>
          </div>
          <div className='tool-content'>
            <center>
              <p>Office is: Closed</p>
              <Link to='/'>
                <button
                  style={{
                    width: '45%',
                    height: '40px',
                    marginTop: '10px',
                    marginRight: '30px'
                  }}
                >
                  Open Office
                </button>
              </Link>
              <Link to='/'>
                <button
                  style={{ width: '45%', height: '40px', marginTop: '10px' }}
                >
                  Close Office
                </button>
              </Link>
            </center>
          </div>
        </div>
        <div className='tool'>
          <div className='tool-header-1'>
            <h3>Auto-Group</h3>
          </div>
          <div className='tool-content'>
            <label htmlFor='classname'>Members Per Group</label>
            <input type='text' id='classname' name='classname' placeholder='' />

            <center>
              <Link to='/'>
                <button
                  style={{
                    width: '45%',
                    height: '40px',
                    marginTop: '10px',
                    marginRight: '30px'
                  }}
                >
                  Form Groups
                </button>
              </Link>
              <Link to='/'>
                <button
                  style={{ width: '45%', height: '40px', marginTop: '10px' }}
                >
                  Remove Groups
                </button>
              </Link>
              <p>Students Grouped: False</p>
            </center>
          </div>
        </div>
      </div>
      <h2 style={{ margin: '0px auto 0px auto', textAlign: 'center' }}>
        Settings
      </h2>
      <div className='tool-container'>
        <div className='tool'>
          <div className='tool-header-1'>
            <h3>Update Info</h3>
          </div>
          <div className='tool-content'>
            <label htmlFor='classname'>Nickname</label>
            <input
              type='text'
              id='classname'
              name='classname'
              placeholder='Mr. Professor...'
            />

            <center>
              <Link to='/'>
                <button
                  style={{ width: '50%', height: '40px', marginTop: '10px' }}
                >
                  Update
                </button>
              </Link>
            </center>
          </div>
        </div>
        <div className='tool'>
          <div className='tool-header-1'>
            <h3>Server Settings</h3>
          </div>
          <div className='tool-content'>
            <label htmlFor='classname'>Classroom Name</label>
            <input
              type='text'
              id='classname'
              name='classname'
              placeholder='Programming Languages...'
            />

            <label htmlFor='classname'>Classroom Code</label>
            <input
              type='text'
              id='classname'
              name='classname'
              placeholder='CS 330...'
            />

            <label htmlFor='classname'>Classroom Section</label>
            <input
              type='text'
              id='classname'
              name='classname'
              placeholder='001...'
            />

            <center>
              <Link to='/'>
                <button
                  style={{ width: '50%', height: '40px', marginTop: '10px' }}
                >
                  Update
                </button>
              </Link>
            </center>
          </div>
        </div>
      </div>

      {/* <h1 style={{ margin: '100px auto 10px auto', textAlign: 'center' }}>
        Tools (Student View)
      </h1>
      <div className='server-container'>
        <div className='server'>
          <h3>Classmates</h3>
          <h5 style={{ margin: '0', padding: '0' }}>Version 1.0.0</h5>
          <p style={{ fontSize: '11px' }}>
            View a list of other students in the class.
          </p>
        </div>
        <div className='server'>
          <h3>My Groups</h3>
          <h5 style={{ margin: '0', padding: '0' }}>Version 1.0.0</h5>
          <p style={{ fontSize: '11px' }}>
            See what classmates are in your group.
          </p>
        </div>
        <div className='server'>
          <h3>Update Info</h3>
          <h5 style={{ margin: '0', padding: '0' }}>Version 1.0.0</h5>
          <p style={{ fontSize: '11px' }}>
            Allows you to update their information in the classroom, like
            prefered name.
          </p>
        </div>
        <div className='server'>
          <h3>Give Feedback</h3>
          <h5 style={{ margin: '0', padding: '0' }}>Version 1.0.0</h5>
          <p style={{ fontSize: '11px' }}>
            Allows you to send in feedback on the class.
          </p>
        </div>
      </div> */}
    </div>
  )
}

export default Toolbelt
