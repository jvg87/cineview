
import { FaCalendarAlt, FaClock, FaStar } from 'react-icons/fa';

import './header.css';


function Header() {
  return ( 
    <div className="header-container">
      <div className="content-left">
        <div className='title'>
          <h2>WONDER WOMAM</h2>
        </div>
        <div className="data">
          <div className='genre'>
            <span>Romance / Drama</span>
          </div>
          <div className='date'>
            <span><FaCalendarAlt/>2019</span>
          </div>
          <div className='time'>
            <span><FaClock/>128 min</span>
          </div>
        </div>
        <div className='data'>
          <div className='rating'>
            <span><FaStar/>7.8 / 10</span>
          </div>
          <div className='pg'>
            <span>PG-13</span>
          </div>
        </div>
        <div className='buttons-header'>
            <button>Salvar Filme</button>
            <a href="#">Assista o Trailer</a>
          </div>
      </div>
      <div className="content-right">
        <div className='overview'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum repellendus illum odit pariatur, possimus ipsum saepe omnis minus eum corrupti.</p>
        </div>
      </div>
    </div>
  );
}

export default Header;