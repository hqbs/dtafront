import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Status () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  const [discordStatus, setDiscordStatus] = useState(null)
  const [authStatus, setAuthStatus] = useState(null)

  useEffect(() => {
    axios
      .get(`http://localhost:8000/status`)
      .then(res => {
        console.log(res)
        let discordStatus = res.data.status
        if (discordStatus === 0) {
          setDiscordStatus('Online')
        } else if (discordStatus === 1) {
          setDiscordStatus('Restarting')
        } else if (discordStatus === 2) {
          setDiscordStatus('Restarting')
        } else if (discordStatus === 3) {
          setDiscordStatus('Online')
        } else if (discordStatus === 4) {
          setDiscordStatus('Online')
        } else if (discordStatus === 5) {
          setDiscordStatus('Offline')
        } else {
          setDiscordStatus('Offline')
        }
      })
      .catch(err => {
        setDiscordStatus('Offline')
      })

    axios
      .get('http://localhost:8001/status')
      .then(res => {
        setAuthStatus(res.data.status)
      })
      .catch(err => {
        setAuthStatus('Offline')
      })
  })

  return (
    <div style={{ marginTop: '100px', marginBottom: '500px' }}>
      <div className='server-container'>
        <div className='server'>
          <h3>Frontend</h3>
          <h5 style={{ margin: '0', padding: '0' }}>
            <span style={{ color: 'green' }}>Online</span>
          </h5>
        </div>
        <div className='server'>
          <h3>Discord Bot</h3>
          <h5 style={{ margin: '0', padding: '0' }}>
            <span
              style={{ color: discordStatus === 'Online' ? 'green' : 'red' }}
            >
              {discordStatus}
            </span>
          </h5>
        </div>
        <div className='server'>
          <h3>API</h3>
          <h5 style={{ margin: '0', padding: '0' }}>
            {' '}
            <span style={{ color: authStatus === 'Online' ? 'green' : 'red' }}>
              {authStatus}
            </span>
          </h5>
        </div>
      </div>

      <center>
        <h3>
          Having issues still? Feel free to get in contact with us at{' '}
          <a href='emailto:support@academe.space'>support@academe.space</a>
        </h3>
      </center>
    </div>
  )
}

export default Status
