import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Movies from "./components/Movies.tsx";
import Movie from "./components/Movie.tsx";

// const sampleMovies = [
//   { id: 1, title: "Movie One",   averageScore: 4.2, description: "An adventure across the galaxy.", runTime: 120, releaseDate: "2023-06-15" },
//   { id: 2, title: "Movie Two",   averageScore: 3.8, description: "A mystery set in a small town.",  runTime: 95,  releaseDate: "2022-11-03" },
//   { id: 3, title: "Movie Three", averageScore: 5.0, description: "A story of friendship.",          runTime: 110, releaseDate: "2024-01-20" },
//   { id: 4, title: "Movie Four",  averageScore: 2.5, description: "A horror film on the edge.",      runTime: 105, releaseDate: "2021-10-31" },
// ];

interface MovieData {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  averageScore: number;
  runTime: number;
  releaseDate: string;
}

function App() {
  const [movies, setMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    fetch("http://localhost:5187/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies movies={movies} />} />
        <Route path="/:id" element={<Movie movies={movies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
