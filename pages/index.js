import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`/movies/api`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  console.log(movies);
  return (
    <div className="container">
      <Seo title="Home"></Seo>
      {!movies && <h4>Loading ...</h4>}
      {movies.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h3>{movie.title}</h3>
          <p>
            {movie.overview.length > 300
              ? movie.overview.slice(0, 300).slice(0, 300) + "..."
              : movie.overview}
          </p>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
