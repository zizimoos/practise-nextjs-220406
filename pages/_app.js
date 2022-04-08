import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar></NavBar>
      <Component {...pageProps} />
      <span>footer</span>
      <style jsx global>{``}</style>
    </>
  );
}
