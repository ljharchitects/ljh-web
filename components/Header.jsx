import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import style from "../styles/header.module.css";
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
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
