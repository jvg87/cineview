import { FaSearch } from 'react-icons/fa';

import './input.css';

function Input() {
  return (
    <div className="input-search">
      <input type="text" name="search" id="search" placeholder='buscar'/>
      <button><FaSearch/></button>
    </div>
  );
}

export default Input;