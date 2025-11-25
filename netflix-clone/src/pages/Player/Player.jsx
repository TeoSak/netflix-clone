import React, { useEffect, useState } from 'react'
import './Player.css'
import backIcon from '../../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Player = () => {

  const { id } = useParams()


  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  })

  useEffect(() => {
    fetch(`https://netflix-clone-1-9tol.onrender.com/movie/${id}/videos`)
      .then(res => res.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          setApiData(data.results[0]);
        }
      })
      .catch(err => console.error(err));
  }, [id]);






  return (
    <div className='player'>
      <div className="back-icon container-lg py-4">
        <Link to={'/'}>
          <img src={backIcon} alt="back icon" className='img-fluid' width={50} />
        </Link>
        {console.log(apiData)}
      </div>
      <div className="trailer-video container-lg">
        <iframe src={`https://www.youtube.com/embed/${apiData.key || ""}`} title='trailer' frameBorder="0" allowFullScreen className='video'></iframe>
      </div>
      <div className="trailer-info container-lg py-3 d-flex justify-content-between">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>

  )
}

