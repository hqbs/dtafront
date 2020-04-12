import React, { useEffect, useState } from 'react'
import axios from 'axios'
const IP = '35.192.87.46:4000'
let ran = false

function Create ({ showSnackbar }) {
  const [serverToken, setServerToken] = useState('')

  function getCookie (cname) {
    var name = cname + '='
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  useEffect(() => {
    if (!ran) {
      ran = true
      axios
        .get(
          'http://' +
            IP +
            '/graphql?query=mutation+_{gendiscordtoken(email:"' +
            getCookie('email') +
            '"){success errors token}}'
        )
        .then(res => {
          setServerToken(res.data.data.gendiscordtoken.token)
        })
    }
  }, [serverToken])

  function copy () {
    /* Get the text field */
    var copyText = document.getElementById('setupcode')

    /* Select the text field */
    copyText.select()
    copyText.setSelectionRange(0, 99999) /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand('copy')
  }

  function submit () {
    axios
      .get(
        'http://' +
          IP +
          '/graphql?query=mutation+_{createclassroomfront(token:"' +
          serverToken +
          '", classname: "' +
          document.getElementById('classname').value +
          '", classnumber: "' +
          document.getElementById('classcode').value +
          '", sectionnumber: "' +
          document.getElementById('section').value +
          '"){success errors token}}'
      )
      .then(res => {
        console.log(res)
        // if (res.data.data.createclassroomfront.success) {
        //   showSnackbar('Server Creation Complete!')
        // } else {
        //   showSnackbar(
        //     'Server Creation Failed. Please refresh and everything again!'
        //   )
        // }
      })
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
            value={'!setup ' + serverToken}
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
          <button
            className='button-alt'
            style={{ width: '100%', height: '60px', marginTop: '10px' }}
            onClick={submit}
          >
            Create Classroom
          </button>
        </center>
      </div>
    </div>
  )
}

export default Create
