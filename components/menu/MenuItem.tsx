import * as React from "react";
import s from "./menuitem.module.css";
import Link from "next/link";

interface props {
  content: string;
  url: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const MenuItem: React.FC<props> = ({ content, url, setOpen }) => {
  return (
    <div>
      <Link href={url} passHref>
        <a onClick={() => setOpen(false)}>
          <div className={s.item}>{content}</div>
        </a>
      </Link>
    </div>
  );
};
