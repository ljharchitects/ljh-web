import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import s from "./menu.module.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface INavigation {
  toggleOpen: (i?: number | undefined) => void;
}

export const Navigation: React.FC<INavigation> = ({ toggleOpen }) => {
  return (
    <motion.ul variants={variants} className={s.navigation}>
      <div className={s.nav_container}>
        {itemIds.map(({ name, url }, index) => (
          <div key={index} className={s.item}>
            <MenuItem content={name} url={url} toggleOpen={toggleOpen} />
          </div>
        ))}
      </div>
    </motion.ul>
  );
};

const itemIds = [
  {
    name: "about",
    url: "/about",
  },
  {
    name: "log",
    url: "/",
  },
  {
    name: "work",
    url: "/work",
  },
];
