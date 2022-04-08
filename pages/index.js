import Seo from "../components/Seo";

export default function Home() {
  return (
    <div>
      <Seo title="Home"></Seo>
      <h1>Home</h1>
      <style jsx global>{`
        h1 {
          color: #6495ed;
        }
      `}</style>
    </div>
  );
}
