import Link from "next/link";
import { memo } from "react";
import style from "../styles/components/nav.module.css";
import Contact from "./Contact";

const Nav = memo(({ open, setOpen }) => (
  <div className={!open ? style.visible : style.invisible}>
    <ul className={style.container} onClick={() => setOpen(true)}>
      <li className={style.item}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li className={style.item}>
        <Link href="/blog">
          <a>Log</a>
        </Link>
      </li>
    </ul>
    <Contact />
  </div>
));

Nav.displayName = "Nav";

export default Nav;
