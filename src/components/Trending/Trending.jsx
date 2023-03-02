import { API } from '../../shared/api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from 'shared/Loader/Loader';
import css from '../Trending/Trending.module.css';

export const Trending = () => {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const data = await API.fetchTrendingMovies();

        setState(data.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <ul className={css.moviesList}>
      {isLoading && <Loader />}

      {state.map(({ title, id, poster_path }) => {
        if (!title) return null;
        return (
          <li key={id} className={css.posterList}>
            <Link
              to={`/movies/${id}`}
              className={css.moviesItem}
              state={{ from: location }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                className={css.poster}
              />
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
