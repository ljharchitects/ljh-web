import Link from "next/link";
import Menu from "./Menu";
import style from "../styles/components/header.module.css";
import { useState } from "react";
import Nav from "./Nav";

function Header(props) {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className={style.container}>
        <div className={style.item}>
          <Link href="/" passHref>
            <a>
              <div className={style.logo} />
            </a>
          </Link>
        </div>
        <div className={style.item}>
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>
      <Nav open={open} setOpen={setOpen} />
    </header>
  );
}

export default Header;
