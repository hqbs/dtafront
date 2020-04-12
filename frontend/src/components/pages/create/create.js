import React from 'react'
import { Link } from 'react-router-dom'

function create () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  function copy () {
    /* Get the text field */
    var copyText = document.getElementById('setupcode')

    /* Select the text field */
    copyText.select()
    copyText.setSelectionRange(0, 99999) /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand('copy')
  }

  return (
    <div>
      <h1 style={{ margin: '100px auto 10px auto', textAlign: 'center' }}>
        Create a Classroom
      </h1>
      <div className='login-container' style={{ marginTop: 0, width: '350px' }}>
        <label htmlFor='classname'>Classroom Name</label>
        <input
          type='text'
          id='classname'
          name='classname'
          placeholder='Database Systems...'
        />

        <label htmlFor='classcode'>Class Code</label>
        <input
          type='text'
          id='classcode'
          name='classcode'
          placeholder='CS 260...'
        />

        <label htmlFor='section'>Section</label>
        <input type='text' id='section' name='section' placeholder='001...' />

        <h5>
          Step 1: You need to create a server. Click on the link below as it
          will automatically generate with our template, which is required!
        </h5>
        <center>
          <a
            href='https://discord.new/ZVKVhmUCDrBG'
            target='_blank'
            style={{ textDecoration: 'none', color: '#5b5dee' }}
            rel='noopener noreferrer'
          >
            Generate Discord Server (With Template)
          </a>
        </center>

        <h5>
          Step 2: You need to invite our discord bot using the link down below.
        </h5>
        <center>
          <a
            href='https://discordapp.com/oauth2/authorize?&client_id=691810394217644052&scope=bot&permissions=8'
            target='_blank'
            style={{ textDecoration: 'none', color: '#5b5dee' }}
            rel='noopener noreferrer'
          >
            Add Discord Bot
          </a>
        </center>

        <h5>
          Step 3: In the top left, click on the down arrow to the right of your
          server name.
        </h5>
        <h5>Step 4: Click on Server Settings</h5>
        <h5>Step 5: Click on Roles</h5>
        <h5>
          Step 6: In the roles section, drag the role 'Hack Quarntine', above
          'Bots'. This will allow our bot to manage the server.
        </h5>

        <h5>Step 7: Run the setup code down below in any channel!</h5>
        <div style={{ position: 'relative' }}>
          <input
            type='text'
            id='setupcode'
            name='classname'
            value='!setup alkjdflkajslkdfjlkasjdlfjasl;djflaksdjflkajsdlkfjalksdjflkasjdklfjaslkdfjlasdjf'
            style={{ color: 'gray' }}
          />
          <button
            onClick={copy}
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              margin: 0,
              marginTop: '10px',
              height: '40px',
              width: '50px',
              fontSize: '12px',
              padding: '3px'
            }}
            id='copy-button'
          >
            Copy
          </button>
        </div>

        <h5>
          After running this command, we will verify everything was setup
          correctly! Hit 'Create Classroom'
        </h5>
        <center>
          <Link to='/'>
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
