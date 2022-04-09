import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ movies }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
    //   {
    //     pathname: `/movies/${id}`,
    //     query: {
    //       title: title,
    //     },
    //   }`/movies/${id}`
  };

  return (
    <div className="container">
      <Seo title="Home"></Seo>
      {movies.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.title)}
          className="movie"
          key={movie.id}
        >
          <Link href={`/movies/${movie.title}/${movie.id}`}>
            <a>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            </a>
          </Link>
          <h3>{movie.title}</h3>
          {/* <p>
            {movie.overview.length > 300
              ? movie.overview.slice(0, 300).slice(0, 300) + "..."
              : movie.overview}
          </p> */}
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
          cursor: pointer;
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

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/movies/api`);
  const data = await res.json();
  return {
    props: {
      movies: data.results,
    },
  };
}
