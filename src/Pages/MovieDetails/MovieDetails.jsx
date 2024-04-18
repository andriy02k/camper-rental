import React, {useState, useEffect, useRef} from 'react'
import { useParams, NavLink, Link, useLocation, Outlet } from 'react-router-dom';
import { fetchMovie } from '../../api/getItem'
import defaultImg from '../../images/image.webp'

const MovieDetails = () => {

  const { moviesId } = useParams();
  const [singleMovie, setSingleMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.location);

  useEffect(() => {
      fetchMovie(moviesId)
        .then(response => {
          setSingleMovie(response);
        })
        .catch(({ message }) => {
          console.log(message);
        });
  }, [moviesId])
  
  if (!singleMovie) {
    return <p>404 Not Found</p>;
  }

  const { title, poster_path, release_date, vote_average, overview, genres } = singleMovie;
  return (
    <div className='p-12'>
      <Link to={backLink.current ?? '/'} className='bg-blue-500 text-white p-2 rounded mb-4 flex w-20'>go back</Link>
      <div className='flex gap-12'>
        <img src={
            poster_path ?
            `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
            }
            width={250}
            alt="poster"
            />
        <div className='flex flex-col gap-2'>
          <h1 className='font-medium text-36px'>{title}({new Date(release_date).getFullYear()})</h1>
          <p className='text-24px'>User Score: {Math.floor(vote_average * 10)}%</p>
          <h2 className='text-24px'>Overview</h2>
          <p className='text-24px'>{overview}</p>
          <h3 className='text-24px'>Genres</h3>
          {genres.map((el, idx) => {
            return (
              <p key={idx} className='font-normal'>{el.name}</p>
            )
          })}
        </div>
      </div>
      <div className='flex gap-12 mt-4'>
          <NavLink className='bg-blue-500 text-white p-2 rounded mb-4 flex w-20' to="cast">
            Cast
          </NavLink>
          <NavLink className='bg-blue-500 text-white p-2 rounded mb-4 flex w-20' to="reviews">
            Reviews
          </NavLink>
      </div>
      <Outlet/>
    </div>
  )
}

export default MovieDetails