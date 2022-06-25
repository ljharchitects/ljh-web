import * as React from "react";
import { motion } from "framer-motion";
import s from "./menu.module.css";
import { NextPage } from "next";

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
}
export const MenuItem: NextPage<IMenuItem> = ({ content }) => {
  // const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" />
      <div className={s.text_placeholder}>{content}</div>
      {/* <div className="icon-placeholder" style={style} />
      <div className={s.text_placeholder} style={style}> */}
    </motion.li>
  );
};
