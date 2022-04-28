import Link from "next/link";
import style from "../styles/components/nav.module.css";

const Nav = ({ open, setOpen }) => (
  <div className={!open ? style.visible : style.invisible}>
    <ul className={style.container} open={open} onClick={() => setOpen(true)}>
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
    <div className={style.flow}>
      <div className={style.flowItem}>
        Contact :{" "}
        <Link href="mailto:ljh@ljh.studio">
          <a>ljh@ljh.studio</a>
        </Link>
      </div>
      <div className={style.flowItem}>
        Instagram :{" "}
        <Link href="https://www.instagram.com/ljh_architects/">
          <a>@ljh_architects</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Nav;
