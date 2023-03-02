import Details from 'components/Details/Details';
import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const { from } = location.state;
  return (
    <div className="section">
      <Details />
      <ul className={css.btnLink}>
        <li>
          <Link to="cast" className={css.btn} state={{ from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" className={css.btn} state={{ from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
