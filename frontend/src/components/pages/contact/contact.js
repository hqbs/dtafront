import React, { useState } from 'react'

function Contact () {
  const [snackMessage, setSnackMessage] = useState('')
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  function showSnackbar (message) {
    // Get the snackbar DIV
    var x = document.getElementById('snackbar-contact')
    setSnackMessage(message)

    // Add the "show" class to DIV
    x.className = 'show'

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className.replace('show', '')
    }, 3000)
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className='create-container-about' style={{ height: 0 }}>
        <h2> </h2>
        <p></p>
      </div>
      <center>
        <h1 style={{ fontSize: '48px' }}>Contact Us</h1>
      </center>
      <div className='login-container'>
        <label for='fname'>Name</label>
        <input type='text' id='name' name='email' placeholder='Name' />

        <label for='fname'>Email</label>
        <input type='text' id='email' name='email' placeholder='Email' />

        <label for='fname'>Message</label>
        <textarea
          type='text'
          id='message'
          name='email'
          placeholder='Type a message here...'
          rows='10'
        />

        <center>
          <button
            className='button-alt'
            style={{ width: '100%', marginRight: '4%' }}
            onClick={showSnackbar}
          >
            Send Message
          </button>
        </center>
      </div>
      <div id='snackbar-contact'>{snackMessage}</div>
    </div>
  )
}

export default Contact
