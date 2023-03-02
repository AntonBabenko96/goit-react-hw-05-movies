import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Loader } from 'shared/Loader/Loader';
import { API } from '../../shared/api';
import css from './Details.module.css';

export const Details = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state;

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const data = await API.fetchMovieById(movieId);

        setDetails(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [movieId]);

  const { original_title, overview, release_date, poster_path } = details;
  const goBack = () => navigate(from);
  return (
    <>
      <button onClick={goBack} className={css.buttonBack}>
        Go back
      </button>
      <div className={css.component}>
        {isLoading && <Loader />}
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
          className={css.poster}
        />
        <div>
          <h2 className={css.title}>{original_title}</h2>
          <p className={css.date}>{release_date}</p>
          <h3 className={css.overviewTitle}>Overview</h3>
          <p className={css.overview}>{overview}</p>
        </div>
      </div>
    </>
  );
};
