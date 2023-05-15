import{ useEffect, useState } from 'react';
import api from '../../services/api';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';

import Header from '../../components/Header';
import Card from '../../components/Card';

import './home.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [headerMovie, setHeaderMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovies(){
      const response = await api.get('movie/now_playing', {
        params:{
          api_key:'c950a9a89f656ce1759e1eb22b79784c',
          language:'pt-BR',
          page: 1
      }
      })

      setHeaderMovie(response.data.results.slice(0,4))
      setMovies(response.data.results.slice(4,14));
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
  console.log(headerMovie);
  console.log(movies);

  return ( 
    <div className='container'>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        a11y
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {headerMovie.map(movie => {
          return (
            <SwiperSlide key={movie.id}>
              <Header
                id={movie.id}
                backdrop_path={movie.backdrop_path}
                title={movie.title}
                release_date={movie.release_date}
                runtime={movie.runtime}
                vote_average={movie.vote_average}
                overview={movie.overview}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <h1>Filmes em Cartaz:</h1>
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