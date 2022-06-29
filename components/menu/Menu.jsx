import { useState } from "react";
import { Navigation } from "./Navigation";
import style from "./menu.module.css";
import { Squash as Hamburger } from "hamburger-react";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className={style.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={30} distance="sm" />
      </div>
      <Navigation setOpen={setOpen} isOpen={isOpen} />
    </>
  );
};

export default Menu;
