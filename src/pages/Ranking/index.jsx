import{ useEffect, useState } from 'react';
import api from '../../services/api';

import Card from '../../components/Card';


function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovies(){
      const response = await api.get('movie/top_rated', {
        params:{
          api_key:'c950a9a89f656ce1759e1eb22b79784c',
          language:'pt-BR',
          page: 1
      }
      })

      setMovies(response.data.results);
      setLoading(false);

    }

    getMovies();

  }, [])

  if(loading){
    return(
        <div className='loading'>
            <h1></h1>
            <h2>Carregando filmes...</h2>
        </div>
    )
  }

  return ( 
    <div className='container'>
      <h1>Melhores Avaliados::</h1>
      <div className="cards">
        {movies.map(movie => {
          return (
            <Card
              id={movie.id}
              poster_path={movie.poster_path}
              overview={movie.overview}
              title={movie.title}
              vote_average={movie.vote_average}
              key={movie.id}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Home;