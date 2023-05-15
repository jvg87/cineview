import { FaCalendarAlt, FaClock, FaStar, FaHeart, FaPlay } from 'react-icons/fa';
import { toast } from 'react-toastify';

import './detailsCard.css';

function DetailsCard({ filme, overview, backdrop_path, title, vote_average, release_date, runtime, genres }) {

  function releaseData(release){
    const data = release
    const year = data.substring(0, 4)
    return year
  }

  function saveMovie(filme){
    const myList = localStorage.getItem('@movies');

    const saveMovies = JSON.parse(myList) || [];

    const hasMovie = saveMovies.some(movieSave => movieSave.id === filme.id);

    if (hasMovie){
      console.log('deu ruim');
      toast.warn('Esse filme já está na sua lista!');
    }

    console.log('deu bom');

    saveMovies.push(filme);
    localStorage.setItem('@movies',JSON.stringify(saveMovies));
    toast.success('Filme salvo com sucesso');
  }


  return ( 
    <div className='card'>
            <div className='card-img'>
                <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title} />
            </div>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <div className='date-time'>
                    <FaCalendarAlt/><span>{releaseData(release_date)}</span>
                    <FaClock/><span>{runtime} min</span>
                </div>
                <div className='genre'>
                    {genres.map((item) => <span key={item.id}>{item.name}</span>)}
                </div>
                <div className='rating'>
                    <FaStar/><strong> {vote_average.toFixed(1)} / 10</strong>
                </div>
                <p>{overview}</p>
                <div className='buttonsCard'>
                    <button onClick={()=>saveMovie(filme)}><FaHeart size={'1.3rem'}/>Salvar Filme</button>
                    <a href={`https://youtube.com/results?search_query=${title} Trailer`} rel='external' target='blank'><FaPlay/>Assista o Trailer</a>
                </div>
            </div>
        </div>
  );
}

export default DetailsCard;