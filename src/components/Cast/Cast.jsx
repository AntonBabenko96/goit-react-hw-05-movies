import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'shared/Loader/Loader';
import { API } from '../../shared/api';
import css from './Cast.module.css';

export const Cast = () => {
  const [castMovie, setCastMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const cast = await API.fetchActorsCredits(movieId);

        setCastMovie(cast);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [movieId]);

  const filteredActorList = () => {
    return castMovie.filter(actor => actor.profile_path);
  };

  return (
    <ul className={css.actors}>
      {isLoading && <Loader />}
      {castMovie.length > 0 &&
        filteredActorList().map(
          ({ id, original_name, character, profile_path }) => {
            return (
              <li key={id} className={css.actorsItem}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={original_name}
                  className={css.actorsPhoto}
                />
                <h3 className={css.actorsName}>{original_name}</h3>
                <p>{character}</p>
              </li>
            );
          }
        )}
    </ul>
  );
};
