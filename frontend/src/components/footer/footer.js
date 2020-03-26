import React from 'react'

function Footer () {
  return (
    <div className='footer'>
      <div className='footer-item'>
        <h4>About</h4>
        <ul className='footer-navigation-container'>
          <li className='footer-navigation-item'>
            <a className='footer-link' href='/'>
              The Project
            </a>
          </li>
          <li className='footer-navigation-item'>
            <a className='footer-link' href='/'>
              The Team
            </a>
          </li>
          <li className='footer-navigation-item'>
            <a className='footer-link' href='/'>
              Getting Started
            </a>
          </li>
          <li className='footer-navigation-item'>
            <a className='footer-link' href='/'>
              Classroom Enviornments
            </a>
          </li>
        </ul>
      </div>
      <div className='footer-item'>
        <h4>Legal</h4>
        <ul className='footer-navigation-container'>
          <li className='footer-navigation-item'>
            <a className='footer-link' href='/'>
              Terms of Service
            </a>
          </li>
          <li className='footer-navigation-item'>
            <a className='footer-link' href='/'>
              Privacy
            </a>
          </li>
          <li className='footer-navigation-item'>
            <a className='footer-link' href='/'>
              Policies
            </a>
          </li>
        </ul>
      </div>
      <div className='footer-item'>
        <h4>Helpful Links</h4>
        <ul className='footer-navigation-container'>
          <li className='footer-navigation-item'>
            <a className='footer-link' href='/'>
              Create a Classroom
            </a>
          </li>
          <li className='footer-navigation-item'>
            <a className='footer-link' href='/'>
              Join a Classroom
            </a>
          </li>
          <li className='footer-navigation-item'>
            <a className='footer-link' href='/'>
              Status
            </a>
          </li>
          <li className='footer-navigation-item'>
            <a className='footer-link' href='/'>
              Use Cases
            </a>
          </li>
        </ul>
      </div>
      <div className='footer-item'>
        <h4>Account</h4>
        <ul className='footer-navigation-container'>
          <li className='footer-navigation-item'>
            <a className='footer-link' href='/'>
              Signup
            </a>
          </li>
          <li className='footer-navigation-item'>
            <a className='footer-link' href='/'>
              Login
            </a>
          </li>
          <li className='footer-navigation-item'>
            <a className='footer-link' href='/'>
              Forgot Password
            </a>
          </li>
          <li className='footer-navigation-item'>
            <a className='footer-link' href='/'>
              Delete Account
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
