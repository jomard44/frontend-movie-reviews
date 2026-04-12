import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface MovieData {
  id: number;
  imageUrl: string | null;
  title: string;
  description: string;
  averageScore: number;
  runTime: number;
  releaseDate: string;
}

interface Review {
  id: number;
  score: number;
  reviewText: string;
  criticName: string;
}

export default function Movie({ movies }: { movies: MovieData[] }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:5187/api/movies/${id}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [id]);

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  const year = new Date(movie.releaseDate).getFullYear();

  return (
    <div className="min-h-screen bg-amber-50 px-6 py-8">
      <Link to="/">View all movies</Link>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={movie.imageUrl ?? ""}
          alt={movie.title}
          className="w-full h-52 sm:h-80 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {movie.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <span>{year}</span>
            <span>{movie.runTime} min</span>
            <span className="text-amber-600 font-semibold text-base">
              {movie.averageScore.toFixed(1)} / 5
            </span>
          </div>
          <p className="text-gray-700">{movie.description}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Critic Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow p-6 mb-4"
            >
              <p className="font-bold text-gray-800">{review.criticName}</p>
              <p className="text-amber-600 font-semibold">{review.score} / 5</p>
              <p className="text-gray-700 mt-2">{review.reviewText}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
