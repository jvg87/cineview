import {useState, useEffect} from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { FaSearch } from 'react-icons/fa';

import Card from '../../components/Card';

import './search.css'

function Search() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q'); 

  useEffect(() => {
    async function getMovies(){
      const response = await api.get('search/movie', {
        params:{
          api_key:'c950a9a89f656ce1759e1eb22b79784c',
          language:'pt-BR',
          page: 1,
          query:`${query}`
      }
      })

      setMovies(response.data.results.slice(0, 10));
      setLoading(false);
    }

    {query && getMovies()}

  }, [query, search])

  function handleSubmit(e){
    e.preventDefault();
    
    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch('');
    setLoading(true);
  }

  return ( 
    <div className="search-container">
      <form className="container-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="search" 
          id="search" 
          placeholder='Busque um filme...'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
      />
      <button type='submit' className='btn-search'><FaSearch/></button>
    </form>

      {loading && (
        <div className='loading'>
          <h2>Carregando filmes...</h2>
        </div>
      )}

      <h1>Resultados para: <span className='query'>{query}</span></h1>
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

export default Search;