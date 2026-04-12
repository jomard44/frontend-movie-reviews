interface Movie {
  id: number;
  image: string;
  title: string;
  averageScore: number;
}

export default function Movies({ movies }: { movies: Movie[] }) {
  return (
    <div className="min-h-screen bg-amber-50 px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-amber-900 mb-8 tracking-wide">
        Movies
      </h1>
      <div className="grid grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={movie.image}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
