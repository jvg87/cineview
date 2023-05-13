import { Link } from 'react-router-dom';

import './footer.css';

function Footer() {
  return ( 
    <footer>
      <Link>
        <span>Linkedin</span>
      </Link>
      <Link>
        <span>Github</span>
      </Link>
    </footer>
  );
}

export default Footer;