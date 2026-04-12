import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies.tsx";
import Movie from "./components/Movie.tsx";
import image from "./images/movie.png";

const sampleMovies = [
  {
    id: 1,
    image,
    title: "Movie One",
    averageScore: 4.2,
    description: "An adventure across the galaxy.",
    runtime: 120,
    releaseDate: "2023-06-15",
  },
  {
    id: 2,
    image,
    title: "Movie Two",
    averageScore: 3.8,
    description: "A mystery set in a small town.",
    runtime: 95,
    releaseDate: "2022-11-03",
  },
  {
    id: 3,
    image,
    title: "Movie Three",
    averageScore: 5.0,
    description: "A story of friendship.",
    runtime: 110,
    releaseDate: "2024-01-20",
  },
  {
    id: 4,
    image,
    title: "Movie Four",
    averageScore: 2.5,
    description: "A horror film on the edge.",
    runtime: 105,
    releaseDate: "2021-10-31",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies movies={sampleMovies} />} />
        <Route path="/:id" element={<Movie movies={sampleMovies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
