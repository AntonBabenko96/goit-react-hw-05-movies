import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'shared/Loader/Loader';
import './App.css';

const NotFound = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const NavBar = lazy(() => import('./components/NavBar/NavBar'));
const MovieDetails = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);
const SearchMovies = lazy(() =>
  import('./components/SearchMovies/SearchMovies')
);
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

export const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<Loader />}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<SearchMovies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
