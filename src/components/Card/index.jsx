import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import './card.css';

function Card({ id, poster_path, overview, title, vote_average}) {
  return ( 
    <div className="movie-card">
      <div className="poster">
        <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <div className="rating">
          <span><FaStar/></span>
          <span>{vote_average} / 10</span>
        </div>
        <div className="info">
          <p>{overview}</p>
        </div>
        <Link to={`/filme/${id}`}>Acessar</Link>
      </div>
    </div>
  );
}

export default Card;