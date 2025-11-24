import React, { useRef, useEffect, useState } from 'react'
import './TitleCards.css'
import { cards_data } from '../../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

export const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([])
  const scrollRef = useRef(null)


  useEffect(() => {
    fetch(`http://localhost:5000/movies/${category ? category : "now_playing"}`)
      .then(res => res.json())
      .then(data => {
        console.log("API DATA:", data.results);
        setApiData(data.results);
      })
      .catch(err => console.error(err));

    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.shiftKey) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener('wheel', handleWheel);
    return () => el.removeEventListener('wheel', handleWheel);

  }, [category]);




  return (
    <div className='titleCards container'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="movie-cards d-flex gap-3" ref={scrollRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/play/${card.id}`} className="cardss" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500` + card.poster_path} alt={card.original_title} width={200} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

