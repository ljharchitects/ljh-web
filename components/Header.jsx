import Link from "next/link";
import Menu from "./Menu";
import style from "../styles/components/header.module.css";
import { useState } from "react";
import Nav from "./Nav";

const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <header>
      <div className={style.container}>
        <div className={style.item}>
          <Link href="/" passHref>
            {/* <a className={style.logoBlock}> */}
            {/* <div className={style.logo}></div> */}
            <div className={style.logoTxt}>ljh</div>
            {/* </a> */}
          </Link>
        </div>
        <div className={style.item}>
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>
      <Nav open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
