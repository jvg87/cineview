import { useEffect, useState } from "react";

import Card from "../../components/Card";

import './favoritos.css'

function Favoritos() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const myList = localStorage.getItem('@movies');
    setMovies(JSON.parse(myList) || []);
    setLoading(false);

  }, []);

  function deleteMovie(id){
    const filteredMovies = movies.filter( item => item.id !== id);
    setMovies(filteredMovies);
    localStorage.setItem('@moveis', JSON.stringify(filteredMovies));
    alert('Filme removido com sucesso!');
  }

  if (loading){
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return ( 
    <div className="container-fav">
      <h1>Filmes Favoritos</h1>
      {movies.length === 0 && <h2>Você não possui filme salvo :(</h2>}
      <div className="cards">
        {movies.map(movie => {
          return (
            <div className="box-card" key={movie.id}>
              <Card
                id={movie.id}
                poster_path={movie.poster_path}
                overview={movie.overview}
                title={movie.title}
                vote_average={Number(movie.vote_average.toFixed(1))}
                key={movie.id}
              />
              <button className='del' onClick={() => deleteMovie(movie.id)}>Excluir</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Favoritos;