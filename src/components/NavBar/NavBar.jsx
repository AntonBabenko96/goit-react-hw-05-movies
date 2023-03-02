import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className="container">
      <ul className={css.navBar}>
        <li className={css.navBarLink}>
          <NavLink to="/" className={css.navBtn}>
            Home
          </NavLink>
        </li>
        <li className={css.navBarLink}>
          <NavLink to="/movies" className={css.navBtn}>
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
