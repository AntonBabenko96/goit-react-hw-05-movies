import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    const search = event.target.value;
    setSearch(search);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(search);
    reset();
  };

  const reset = () => {
    setSearch('');
  };
  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <button type="submit" className={css.btn}>
            <span>Search</span>
          </button>

          <input
            name="search"
            value={search}
            onChange={handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            className={css.input}
          />
        </form>
      </header>
    </>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
