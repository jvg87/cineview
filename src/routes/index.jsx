import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Favoritos from '../pages/Favoritos';
import Ranking from '../pages/Ranking';
import Search from '../pages/Search';
import NotFound from '../pages/NotFound';

function RoutesApp() {
  return ( 
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/fav' element={ <Favoritos/> }/>
      <Route path='/ranking' element={ <Ranking/> }/>
      <Route path='/search' element={ <Search/> }/>

      <Route path='*' element={ <NotFound/> }/>
    </Routes>
  );
}

export default RoutesApp;