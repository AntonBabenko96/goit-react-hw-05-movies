import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
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
          <button type="submit">
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
          />
        </form>
      </header>
    </>
  );
};
