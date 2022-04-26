import style from "../styles/menu.module.css";

const Menu = ({ open, setOpen }) => (
  <div className={style.container} open={open} onClick={() => setOpen(!open)}>
    <div className={style.item}>{open ? "Menu" : "Close"}</div>
  </div>
);

export default Menu;
