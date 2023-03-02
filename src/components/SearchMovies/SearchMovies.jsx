import { useState, useEffect } from 'react';
import { Loader } from 'shared/Loader/Loader';
import { API } from '../../shared/api';
import { Link } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import css from './SearchMovies.module.css';
import { useSearchParams, useLocation } from 'react-router-dom';

const SearchMovies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');
  const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const results = await API.fetchSearchMovie(search);

        setSearchMovies(results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    if (search) {
      getMovies();
    }
  }, [search]);

  const updateSearchHandler = search => {
    setSearchParams({
      search,
    });
  };

  return (
    <div className="section">
      <SearchBar onSubmit={updateSearchHandler} />
      {isLoading && <Loader />}
      {search
        ? !isLoading &&
          searchMovies.length === 0 && (
            <p>
              There are no results for the request "{search}". Enter the correct
              one value.
            </p>
          )
        : ''}
      <ul className={css.moviesList}>
        {searchMovies.map(({ title, id, poster_path }) => {
          if (!title || !poster_path) return null;
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
    </div>
  );
};

export default SearchMovies;
