import { Route, Routes } from 'react-router-dom';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { MovieDetails } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { NavBar } from 'components/NavBar/NavBar';
import { NotFound } from 'pages/NotFoundPage/NotFoundPage';
import { CastPage } from 'pages/CastPage/CastPage';
import { ReviewsPage } from 'pages/ReviewsPage/ReviewsPage';
import { HomePage } from 'pages/HomePage/HomePage';
import './App.css';

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
