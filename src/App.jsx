import { BrowserRouter } from 'react-router-dom';

import RoutesApp from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return ( 
    <BrowserRouter>
      <Navbar/>
      <RoutesApp/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;