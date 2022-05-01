import style from "../styles/components/contact.module.css";
import Link from "next/link";

const Contact = (props) => (
  <div className={style.flow}>
    <div className={style.flowItem}>
      Contact :{" "}
      <Link href="mailto:ljh@ljh.studio">
        <a target="_blank" rel="noopener noreferrer">
          ljh@ljh.studio
        </a>
      </Link>
    </div>
    <div className={style.flowItem}>
      Instagram :{" "}
      <Link href="https://www.instagram.com/ljh_architects/">
        <a target="_blank" rel="noopener noreferrer">
          @ljh_architects
        </a>
      </Link>
    </div>
  </div>
);

export default Contact;
