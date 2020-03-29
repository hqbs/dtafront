import React, { useState } from 'react'
import axios from 'axios'

function Status () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  const [status, setStatus] = useState(null)

  axios
    .get(`http://localhost:8000/status`)
    .then(res => {
      console.log(res)
      let status = res.data.status
      if (status === 0) {
        setStatus('Online')
      } else if (status === 1) {
        setStatus('Restarting')
      } else if (status === 2) {
        setStatus('Restarting')
      } else if (status === 3) {
        setStatus('Online')
      } else if (status === 4) {
        setStatus('Online')
      } else if (status === 5) {
        setStatus('Offline')
      } else {
        setStatus('Offline')
      }
    })
    .catch(err => {
      setStatus('Offline')
    })

  return (
    <div style={{ marginTop: '100px', marginBottom: '500px' }}>
      <div className='status-container'>
        <h1>
          Discord Bot Status:{' '}
          <span style={{ color: status === 'Online' ? 'green' : 'red' }}>
            {status}
          </span>
        </h1>
      </div>
    </div>
  )
}

export default Status
