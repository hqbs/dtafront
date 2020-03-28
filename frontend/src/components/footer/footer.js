import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <div className='footer'>
      <div className='footer-item'>
        <h4>About</h4>
        <ul className='footer-navigation-container'>
          <li className='footer-navigation-item'>
            <Link className='footer-link' to='/project'>
              The Project
            </Link>
          </li>
          <li className='footer-navigation-item'>
            <Link className='footer-link' to='/team'>
              The Team
            </Link>
          </li>
          <li className='footer-navigation-item'>
            <Link className='footer-link' to='/gettingstarted'>
              Getting Started
            </Link>
          </li>
          <li className='footer-navigation-item'>
            <Link className='footer-link' to='/environments'>
              Classroom Environments
            </Link>
          </li>
        </ul>
      </div>
      <div className='footer-item'>
        <h4>Legal</h4>
        <ul className='footer-navigation-container'>
          <li className='footer-navigation-item'>
            <Link className='footer-link' to='/tos'>
              Terms of Service
            </Link>
          </li>
          <li className='footer-navigation-item'>
            <Link className='footer-link' to='/privacy'>
              Privacy
            </Link>
          </li>
          <li className='footer-navigation-item'>
            <Link className='footer-link' to='/policies'>
              Policies
            </Link>
          </li>
        </ul>
      </div>
      <div className='footer-item'>
        <h4>Helpful Links</h4>
        <ul className='footer-navigation-container'>
          <li className='footer-navigation-item'>
            <Link className='footer-link' to='/create'>
              Create a Classroom
            </Link>
          </li>
          <li className='footer-navigation-item'>
            <Link className='footer-link' to='/join'>
              Join a Classroom
            </Link>
          </li>
          <li className='footer-navigation-item'>
            <Link className='footer-link' to='/status'>
              Status
            </Link>
          </li>
          <li className='footer-navigation-item'>
            <Link className='footer-link' to='/usecases'>
              Use Cases
            </Link>
          </li>
        </ul>
      </div>
      <div className='footer-item'>
        <h4>Account</h4>
        <ul className='footer-navigation-container'>
          <li className='footer-navigation-item'>
            <Link className='footer-link' to='/login'>
              Login
            </Link>
          </li>
          <li className='footer-navigation-item'>
            <Link className='footer-link' to='/signup'>
              Signup
            </Link>
          </li>
          <li className='footer-navigation-item'>
            <Link className='footer-link' to='/forgot'>
              Forgot Password
            </Link>
          </li>
          <li className='footer-navigation-item'>
            <Link className='footer-link' to='/delete'>
              Delete Account
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
