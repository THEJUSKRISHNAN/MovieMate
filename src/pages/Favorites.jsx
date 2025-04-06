import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className="w-full px-4 md:px-10 py-8">
        <h2 className="mb-8 text-center text-3xl sm:text-4xl font-bold text-white drop-shadow-md">
          Your Favorites
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <div key={movie.id} className="animate-fadeIn">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-6 mt-10 h-screen">
      <div className="max-w-xl mx-auto bg-gray-800 bg-opacity-5 p-6 sm:p-8 rounded-xl text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-red-600 mb-4">
          No Favorite Movies Yet
        </h2>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          Start adding movies to your favorites and they will appear here!
        </p>
      </div>
    </div>
  );
}

export default Favorites;
