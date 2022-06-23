import Head from "next/head";
import Link from "next/link";
import Contact from "../components/Contact";
import style from "../styles/components/about.module.css";

const About = (props) => {
  return (
    <div className={style.container}>
      <Head>
        <title>ljh | 이진환</title>
      </Head>
      <article className={style.article}>
        <h1 className={style.name}>이진환</h1>
        <h2 className={style.nameTitle}>컴퓨테이셔널 디자이너 | 건축사</h2>

        <section className={style.section}>
          <ul>
            <li>문제를 해결합니다.</li>
            <li>관습적으로 해오던 방식에 의문을 제기합니다.</li>
            <li>더 나은 환경을 만들기 위해 노력합니다.</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default About;
