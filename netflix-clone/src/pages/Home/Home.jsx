import React from 'react'
import './Home.css'
import {Navbar} from '../../components/Navbar/Navbar'
import {TitleCards} from '../../components/TitleCards/TitleCards'
import {Footer} from '../../components/Footer/Footer'
import hero_title from '../../../assets/hero_title.png'
import playIcon from '../../../assets/play_icon.png'
import infoIcon from '../../../assets/info_icon.png'

export const Home = () => {
  return (
    <div>
    <Navbar/>
    <div className="hero">
    <div className="hero-section d-flex justify-content-start align-items-end ">
      <div className="container p-2">
        <div className="hero-title">
        <img src={hero_title} alt="title" className='img-fluid' />
      </div>
      <div className='my-3'>
        <p className='fs-5'>
        Discovering his ties to a secret ancient order, a young man living in modern
        Istanbul embarks on a quest to save the city from an imortal enemy.
      </p>
      </div>
      <div className="buttons d-flex justify-content-start align-items-center gap-3">
        <button className='button-1'> <img src={playIcon} alt="play" width={30} className='me-2' />Play</button>
        <button className="button-2"><img src={infoIcon} alt="info" width={30} />More Info</button>
      </div>
      
      </div>
      
    </div>
    <TitleCards/>
    <TitleCards title={"Blockbuster Movies"} category={'top_rated'}/>
    <TitleCards title={'Only on Netflix'} category={'popular'}/>
    <TitleCards title={'Upcoming'} category={'upcoming'}/>
    <TitleCards title={'Pics for You'} category={'now_playing'}/>

    </div>
    <Footer/>
    </div>
  )
}

