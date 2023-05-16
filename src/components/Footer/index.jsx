import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import './footer.css';

function Footer() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  return ( 
    <footer>
      <span>Copyright © {anoAtual} Todos direitos reservados por JVG87.</span>
      <div className="social-medias">
        <Link to='https://linkedin.com' target='_blank' rel='external'>
          <FaLinkedin/>
        </Link>
        <Link to='https://github.com/jvg87' target='_blank' rel='external'>
          <FaGithub/>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;