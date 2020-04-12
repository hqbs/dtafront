import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const IP = '35.192.87.46:4000'

function Servers () {
  const [servers, setServers] = useState('')
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

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
    let wrap = document
      .createElement('div')
      .setAttribute('class', 'server-container')

    axios
      .get(
        'http://' +
          IP +
          '/graphql?query={getuserclassrooms(email:"' +
          getCookie('email') +
          '",token:"' +
          getCookie('token') +
          '"){classname,classnumber,sectionnumber,dcordserverid}}'
      )
      .then(data => {
        console.log(data)
        if (data.data.data.getuserclassrooms != null) {
          let wrap = data.data.data.getuserclassrooms.map((item, key) => {
            console.log(item)
            return (
              <Link
                to={'/tools/' + item.dcordserverid}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <div className='server'>
                  <h3>{item.classname}</h3>
                  <h5 style={{ margin: '0', padding: '0' }}>
                    {item.classnumber}
                  </h5>
                  <p style={{ fontSize: '11px' }}>
                    Section: {item.sectionnumber}
                  </p>
                </div>
              </Link>
            )
          })
          setServers(wrap)
        }
      })
  }, [])

  return (
    <div>
      <div className='create-container-about' style={{ height: 0 }}>
        <h2> </h2>
        <p></p>
      </div>
      <center>
        <h1 style={{ fontSize: '48px' }}>
          My Classrooms{' '}
          <Link to='/create'>
            <button
              style={{
                fontSize: '12px',
                marginTop: '10px',
                padding: '3px 10px',
                top: '0',
                verticalAlign: 'middle'
              }}
            >
              Create
            </button>
          </Link>
        </h1>
      </center>
      <div className='server-container'>{servers}</div>

      {/* <h1 style={{ margin: '50px auto 10px auto', textAlign: 'center' }}>
        Joined Classrooms{' '}
        <Link to='/join'>
          <button
            style={{
              fontSize: '12px',
              marginTop: '10px',
              padding: '3px 10px',
              top: '0',
              verticalAlign: 'middle'
            }}
          >
            Join
          </button>
        </Link>
      </h1> */}

      {/* <div className='server-container'>
        <Link to='/tools' style={{ textDecoration: 'none', color: 'black' }}>
          <div className='server'>
            <h3>Introduction to Biology</h3>
            <h5 style={{ margin: '0', padding: '0' }}>BIO 100</h5>
            <p style={{ fontSize: '11px' }}>Section: 001</p>
          </div>
        </Link>
        <Link to='/tools' style={{ textDecoration: 'none', color: 'black' }}>
          <div className='server'>
            <h3>Introduction to Geology</h3>
            <h5 style={{ margin: '0', padding: '0' }}>GEO 101</h5>
            <p style={{ fontSize: '11px' }}>Section: 001</p>
          </div>
        </Link>
      </div> */}
    </div>
  )
}

export default Servers
