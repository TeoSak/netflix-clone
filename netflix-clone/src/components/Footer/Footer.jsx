import React from 'react'
import './Footer.css'
import instagram_icon from '../../../assets/instagram_icon.png'
import twitter_icon from '../../../assets/twitter_icon.png'
import youtube_icon from '../../../assets/youtube_icon.png'
import facebook_icon from '../../../assets/facebook_icon.png'


export const Footer = () => {
  return (
    <div className='footer bg-black'>
      <div className="container py-4">
        <div className="footer-icons d-flex gap-3">
        <img src={facebook_icon} alt="facebook" className='img-fluid' width={40} />
        <img src={instagram_icon} alt="instagram" className='img-fluid' width={40} />
        <img src={twitter_icon} alt="twitter" className='img-fluid' width={40} />
        <img src={youtube_icon} alt="youtube" className='img-fluid' width={40} />
      </div>
      <div className="grid-links py-4">
        <div className="row">
          <div className="col-12 col-lg-3">
            <ul className='list-unstyled'>
              <li>Audio Discription</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div className="col-12 col-lg-3">
            <ul className='list-unstyled'>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div className="col-12 col-lg-3">
            <ul className='list-unstyled'>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="col-12 col-lg-3">
            <ul className='list-unstyled'>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
       <div className="copyright pt-4">
        <p className='text-center'>&copy; {new Date().getFullYear()} Teo's Netflix Clone. All rights reserved.</p>
      </div>
      </div>
     
    </div>
  )
}

