import { memo } from "react";
import style from "../styles/components/menu.module.css";

const Menu = memo(({ open, setOpen }) => (
  <div className={style.container} onClick={() => setOpen(!open)}>
    <div className={style.item}>{open ? "Menu" : "Close"}</div>
  </div>
));
Menu.displayName = "Menu";
export default Menu;
