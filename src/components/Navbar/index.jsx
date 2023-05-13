import { Link } from 'react-router-dom';
import { FaSearch, FaStar, FaHeart } from 'react-icons/fa';

import './navbar.css';

function Navbar() {
  return ( 
    <nav>
      <div className="logo">
        <Link to='/'>
          <span>CineView</span>
        </Link>
      </div>
      <div className="nav-links">
        <Link to='/search'>
          <span><FaSearch/></span>
        </Link>
        <Link to='/fav'>
          <span>Meus Filmes</span>
        </Link>
        <Link to='/ranking'>
          <span>Melhore Avaliados</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;