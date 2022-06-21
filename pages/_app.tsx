import type { AppProps } from "next/app";
import Header from "../components/Header";
import style from "../styles/_app.module.css";
import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      {/* <Nav /> */}

      <main className={style.container}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
