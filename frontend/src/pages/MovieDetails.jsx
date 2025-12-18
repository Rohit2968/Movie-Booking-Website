import m4 from "../assets/m4.avif";
import { filters } from "../utils/constants";
import TheaterTimings from "../components/movies/TheaterTimings";

const movie = {
  id: 1,
  title: "F1: The Movie",
  genre: ["Action/Drama/Sports"],
  rating: 9.5,
  votes: "6.8K",
  img: m4,
  languages: ["English, Hindi, Tamil, Telugu"],
  format: ["2D", "3D", "IMAX 3D"],
  certification: "UA16+",
  duration: "2h 24m",
  releaseDate: "2023-09-15",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
};

const MovieDetails = () => {
  return (
    <>
      {/* DARK MOVIE HEADER SECTION */}
      <div
        className="relative text-white font-sans px-4 py-10"
        style={{
          backgroundImage: `url(${movie.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Poster */}
          <div>
            <img
              src={movie.img}
              alt={movie.title}
              className="rounded-xl w-52 shadow-xl"
            />
          </div>

          {/* Text Details */}
          <div className="flex flex-col justify-start flex-1">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#3a3a3a] px-4 py-2 rounded-md flex items-center gap-2 text-sm">
                <span className="text-pink-500 font-bold">☆ {movie.rating}</span>
                <span className="text-gray-300">{movie.votes} Votes</span>
                <button className="cursor-pointer bg-[#2f2f2f] ml-6 px-4 py-2 rounded-md hover:bg-[#4a4a4a]">
                  Rate Now
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm mb-4">
              <span className="bg-[#3a3a3a] px-3 py-1 rounded">{movie.format.join(", ")}</span>
              <span className="bg-[#3a3a3a] px-3 py-1 rounded">{movie.languages.join(", ")}</span>
            </div>

            <p className="text-sm text-gray-300 mb-4">
              {movie.duration} • {movie.genre.join(", ")} • {movie.certification} •{" "}
              {movie.releaseDate}
            </p>

            <div>
              <h2 className="text-xl font-bold mb-2">About the Movie</h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {movie.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHITE SECTION STARTS HERE */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4">

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-3 mb-4">
            {filters.map((filter, i) => (
              <button
                key={i}
                className="border border-gray-300 px-4 py-1 rounded-full text-sm bg-white hover:bg-gray-500"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* LEGEND */}
          <div className="bg-gray-100 rounded px-4 py-2 flex items-center gap-6 text-sm mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
              <span>Filling fast</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-400 rounded-full"></span>
              <span>Almost full</span>
            </div>
          </div>

          {/* THEATER TIMINGS COMPONENT (WHITE BACKGROUND) */}
          <div className="bg-white">
            <TheaterTimings />
          </div>

        </div>
      </div>
    </>
  );
};

export default MovieDetails;
