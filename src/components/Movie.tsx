import { Link, useParams } from "react-router-dom";

interface MovieData {
  id: number;
  image: string;
  title: string;
  description: string;
  averageScore: number;
  runtime: number;
  releaseDate: string;
}

export default function Movie({ movies }: { movies: MovieData[] }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  const year = new Date(movie.releaseDate).getFullYear();

  return (
    <div className="min-h-screen bg-amber-50 px-6 py-8">
      <Link to="/">View all movies</Link>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img src={movie.image} alt={movie.title} className="w-full h-80 object-cover" />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{movie.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <span>{year}</span>
            <span>{movie.runtime} min</span>
            <span className="text-amber-600 font-semibold text-base">
              {movie.averageScore.toFixed(1)} / 5
            </span>
          </div>
          <p className="text-gray-700">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}
