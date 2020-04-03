import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

function featureta () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  function open () {
    axios.get('http://localhost:8000/ta/open/691808020329660458').then(res => {
      console.log(res)
    })
  }

  function close () {
    axios.get('http://localhost:8000/ta/close/691808020329660458').then(res => {
      console.log(res)
    })
  }

  return (
    <div style={{ marginTop: '100px', marginBottom: '500px' }}>
      <center>
        <button onClick={open}>Open TA Classroom</button>
        <button onClick={close}>Close TA Classroom</button>
      </center>
    </div>
  )
}

export default featureta
