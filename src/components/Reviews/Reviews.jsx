import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'shared/Loader/Loader';
import { API } from '../../shared/api';
import css from './Reviews.module.css';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const results = await API.fetchMovieReviews(movieId);

        setReviews(results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {reviews.length > 0 ? (
        <ul className={css.reviewsItem}>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        'Ще не написали жодної рецензії'
      )}
    </div>
  );
};
