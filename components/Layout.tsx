import React, { ReactNode } from "react";
// import { NextSeo } from 'next-seo'
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  // title: string;
  // description: string;
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -200 },
};

// const Layout = ({ children, title, description }: Props): JSX.Element => (
const Layout = ({ children }: Props): JSX.Element => (
  <div>
    {/* <NextSeo title={title} description={description} openGraph={{ title, description }} /> */}
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "spring", duration: 0.8 }}
    >
      {children}
    </motion.main>
  </div>
);

export default Layout;
