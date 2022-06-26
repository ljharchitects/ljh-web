import * as React from "react";
import { motion } from "framer-motion";
import s from "./menu.module.css";
import { NextPage } from "next";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface IMenuItem {
  content: string;
  url: string;
  toggleOpen: (i?: number | undefined) => void;
}
export const MenuItem: NextPage<IMenuItem> = ({ content, url, toggleOpen }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={url} passHref>
        <a onClick={() => toggleOpen()}>
          {/* <div className="icon-placeholder" /> */}
          <div className={s.text_placeholder}>{content}</div>
          {/* <div className="icon-placeholder" style={style} />
      <div className={s.text_placeholder} style={style}> */}
        </a>
      </Link>
    </motion.li>
  );
};
