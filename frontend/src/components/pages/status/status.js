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
      <div className='status-container'>
        <h1>
          Discord Bot:{' '}
          <span style={{ color: discordStatus === 'Online' ? 'green' : 'red' }}>
            {discordStatus}
          </span>
        </h1>
      </div>
      <div className='status-container'>
        <h1>
          Authentication API:{' '}
          <span style={{ color: authStatus === 'Online' ? 'green' : 'red' }}>
            {authStatus}
          </span>
        </h1>
      </div>
      <div className='status-container'>
        <h1>
          Database: <span style={{ color: 'grey' }}>Not Implemented</span>
        </h1>
      </div>
      <div className='status-container'>
        <h1>
          Web API: <span style={{ color: 'grey' }}>Not Implemented</span>
        </h1>
      </div>
    </div>
  )
}

export default Status
