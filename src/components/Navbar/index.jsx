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
          <FaSearch/><span>Buscar Filme</span>
        </Link>
        <Link to='/fav'>
          <FaHeart/><span>Meus Filmes</span>
        </Link>
        <Link to='/ranking'>
          <FaStar/><span>Melhores Avaliados</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;