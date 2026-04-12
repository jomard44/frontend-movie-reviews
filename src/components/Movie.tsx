interface MovieProps {
  image: string;
  title: string;
  description: string;
  averageScore: number;
  runtime: number;
  releaseDate: string;
}

export default function Movie({
  image,
  title,
  description,
  averageScore,
  runtime,
  releaseDate,
}: MovieProps) {
  const year = new Date(releaseDate).getFullYear();

  return (
    <div className="min-h-screen bg-amber-50 px-6 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-80 object-cover" />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <span>{year}</span>
            <span>{runtime} min</span>
            <span className="text-amber-600 font-semibold text-base">
              {averageScore.toFixed(1)} / 5
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
