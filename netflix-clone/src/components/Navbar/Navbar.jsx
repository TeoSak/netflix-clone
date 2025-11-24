import React from 'react'
import './Navbar.css'
import logo from '../../../assets/logo.png'
import search from '../../../assets/search_icon.svg'
import profile from '../../../assets/profile_img.png'


export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg fixed-top navbar-dark'>
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="netflix" className='img-fluid' width={90} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id='navbarNav'>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <div className="nav-left">
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a href="#" className='nav-link text-white'>Home</a>
                </li>
                <li className='nav-item'>
                  <a href="#" className='nav-link text-white'>TV Shows</a>
                </li>
                <li className='nav-item'>
                  <a href="#" className='nav-link text-white'>Movies</a>
                </li>
                <li className='nav-item'>
                  <a href="#" className='nav-link text-white'>New & Popular</a>
                </li>
                <li className='nav-item'>
                  <a href="#" className='nav-link text-white'>My List</a>
                </li>
                <li className='nav-item'>
                  <a href="#" className='nav-link text-white'>Browse Languages</a>
                </li>
              </ul>
            </div>
            <div className="nav-right">
              <div className="">
                <ul className='navbar-nav d-flex align-items-center'>
                  <li className="nav-item">
                    <a href="#" className='nav-link'>
                      <img src={search} alt="search" className='img-fluid' />
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>Children</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="/login" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={profile} onClick={() => { logout() }} alt="profile" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
              </div>

            </div>
          </div>


        </div>
      </div>
    </nav>
  )
}

