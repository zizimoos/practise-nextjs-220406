import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../components/Seo";

export default function Detail({ fromServer }) {
  const router = useRouter();

  const [title, id] = fromServer || [];

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/movies/api/${id}`);
      const data = await res.json();
      setMovie(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Seo title={title}></Seo>
      <h4>{title || "Loading ..."}</h4>
      <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} />
      <p>{movie?.overview}</p>
      <br></br>
      {movie?.genres?.map((genre) => (
        <span key={genre.id}>{genre.name} /</span>
      ))}
      <div>
        {movie?.production_companies?.map((company) => (
          <span key={company.id}>{company.name} /</span>
        ))}
      </div>
    </>
  );
}

export function getServerSideProps(context) {
  console.log(context.params.id);
  const { id: fromServer } = context.params;

  return {
    props: { fromServer },
  };
}
