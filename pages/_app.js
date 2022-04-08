import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <span>footer</span>
      <style jsx global>{``}</style>
    </Layout>
  );
}
