import React from "react";
import style from "../styles/components/footer.module.css";

const Footer = () => (
  <div className={style.footer}>
    <div className={style.footer_item}>
      <hr className={style.hr} />
      <div className={style.contents}>
        <div className={style.content}>©2022 ljh</div>
        <div className={style.content}>ljh@ljh.studio</div>
      </div>
    </div>
  </div>
);

export default Footer;
