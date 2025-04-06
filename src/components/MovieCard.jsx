import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
  const favorite = isFavorite(movie.id)

  function onFavoriteClick(e) {
    e.preventDefault()
    if (favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie)
  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-[#1a1a1a] flex flex-col transition-transform duration-200 hover:-translate-y-1 h-full">
      
     
      <div className="relative aspect-[2/3] w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
          <button
            className={`absolute top-4 right-4 w-10 h-10 sm:w-8 sm:h-8 text-xl sm:text-lg rounded-full flex items-center justify-center transition-colors duration-200 ${
              favorite ? "text-[#ff4757]" : "text-white"
            } bg-black/50 hover:bg-black/80`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>

      
      <div className="p-4 sm:p-3 flex flex-col gap-2 flex-1 text-white text-sm sm:text-base">
        <h3 className="text-base sm:text-lg font-semibold leading-tight">{movie.title}</h3>
        <p className="text-gray-400 text-sm">{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  )
}

export default MovieCard
