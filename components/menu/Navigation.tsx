import * as React from "react";
import { MenuItem } from "./MenuItem";
import s from "./navigation.module.css";

interface props {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navigation: React.FC<props> = ({ isOpen, setOpen }) => {
  const container = isOpen ? s.container : s.containerHidden;
  return (
    <div className={container}>
      <div className={s.item_container}>
        {itemIds.map(({ name, url }, index) => (
          <div key={index}>
            <MenuItem content={name} url={url} setOpen={setOpen} />
          </div>
        ))}
      </div>
    </div>
  );
};

const itemIds = [
  {
    name: "about",
    url: "/about",
  },
  {
    name: "log",
    url: "/",
  },
  {
    name: "work",
    url: "/work",
  },
];
