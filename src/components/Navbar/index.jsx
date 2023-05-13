import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaStar, FaHeart } from 'react-icons/fa';

import './navbar.css';

function Navbar() {
  return ( 
    <nav>
      <Link to='/' className='logo'>
        <FaHome/><span>CineView</span>
      </Link>
      <Link to='/fav' className='buttons'>
        <FaHeart/><span>Meus Filmes</span>
      </Link>
      <Link to='/ranking' className='buttons'>
        <FaStar/><span>Top 10</span>
      </Link>
      <Link to='/search' className='buttons'>
        <FaSearch/><span>Buscar</span>
      </Link>
    </nav>
  );
}

export default Navbar;