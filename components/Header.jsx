import Link from "next/link";
import style from "../styles/components/header.module.css";
import { useState } from "react";
// import Nav from "./Nav";

const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <header>
      <div className={style.container}>
        <div className={style.item}>
          <Link href="/" passHref>
            <a>
              <div className={style.logoTxt}>ljh</div>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
