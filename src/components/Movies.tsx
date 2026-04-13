import { Link } from "react-router-dom";
import { useState } from "react";

interface Movie {
  id: number;
  imageUrl: string | null;
  title: string;
  averageScore: number;
}

export default function Movies({ movies }: { movies: Movie[] }) {
  const [search, setSearch] = useState("");

  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-amber-50 px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-amber-900 mb-8 tracking-wide">
        Movies
      </h1>
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white shadow-sm"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={movie.imageUrl ?? ""}
              alt={movie.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h2 className="font-bold text-lg text-gray-800 mb-1">
                {movie.title}
              </h2>
              <p className="text-sm text-amber-600 font-semibold mb-4">
                {movie.averageScore.toFixed(1)} / 5
              </p>
              <Link to={`/${movie.id}`}>Learn more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
