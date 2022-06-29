import type { AppProps } from "next/app";
import Header from "../components/Header";
import style from "../styles/_app.module.css";
import "../styles/globals.css";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/util/GoogleAnalytics";
import Menu from "../components/menu/Menu";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Menu />
      <Header />

      {/* <AnimatePresence
        exitBeforeEnter
        initial={false}
        // onExitComplete={() => window.scrollTo(0, 0)}
      > */}
      <main className={style.container}>
        <Component {...pageProps} />
      </main>
      {/* </AnimatePresence> */}
      <Footer />
    </>
  );
}

export default MyApp;
