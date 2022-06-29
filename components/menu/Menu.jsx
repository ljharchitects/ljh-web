import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../util/use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useMediaQuery } from "react-responsive";
import style from "./menu.module.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100vw - 60px) 35px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(22px at calc(100vw - 60px) 35px)`,
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const mobileSidebar = {
  ...sidebar,
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100vw - 50px) 35px)`,
  }),
  closed: {
    clipPath: `circle(22px at calc(100vw - 50px) 35px)`,
  },
};

const Menu = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 640px)" });
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className={style.container}>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className={style.nav}
      >
        <motion.div
          className={style.background}
          variants={isSmall ? mobileSidebar : sidebar}
        />
        <Navigation toggleOpen={toggleOpen} isOpen={isOpen} />
        <MenuToggle toggle={toggleOpen} />
      </motion.nav>
    </div>
  );
};

export default Menu;
