import { useEffect, useState} from 'react';
import { useParams, useNavigate} from 'react-router-dom';

import api from '../../services/api';

import DetailsCard from '../../components/DetailsCard';

import './filme.css';

function Filme() {
  const navigation = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function loadFilm(){
      await api.get(`/movie/${id}`, {
        params: {
          api_key:'c950a9a89f656ce1759e1eb22b79784c',
          language:'pt-BR'
        }
      })
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch(() => {
        navigation('/', {replace: true});
        return
      });
    }
    loadFilm();

    return() => {
      console.log('Componente Desmontado');
    }
  }, [id, navigation]);

  if(loading){
    return(
        <div className='loading'>
            <h2>Carregando filmes...</h2>
        </div>
    )
}

  return ( 
    <div className="movie-container">
      <DetailsCard
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                backdrop_path={movie.backdrop_path}
                vote_average={movie.vote_average}
                release_date={movie.release_date}
                runtime={movie.runtime}
                genres={movie.genres}
                filme={movie}
            />
    </div>
  );
}

export default Filme;