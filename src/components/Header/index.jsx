import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaStar } from 'react-icons/fa';

import './header.css';


function Header({ id, backdrop_path, title, release_date, runtime, genres, vote_average, overview }) {

  function releaseData(release){
    const data = release
    const year = data.substring(0, 4)
    return year
}

  return ( 
    <div className="header-container" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`}}>
      <div className="content-left">
        <div className='title'>
          <h2>{title}</h2>
        </div>
        <div className="data">
          <div className='date'>
            <span><FaCalendarAlt/>{releaseData(release_date)}</span>
          </div>
          <div className='rating'>
            <span><FaStar/> {vote_average.toFixed(1)} / 10</span>
          </div>
        </div>
        <Link to={`/filme/${id}`}>Acessar</Link>
      </div>
      {/* <div className="content-right">
        <div className='overview'>
          <p>{overview}</p>
        </div>
      </div> */}
    </div>
  );
}

export default Header;