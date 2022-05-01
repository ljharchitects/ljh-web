import Head from "next/head";
import Link from "next/link";
import Contact from "../components/Contact";
import style from "../styles/components/about.module.css";

const About = (props) => {
  return (
    <div className={style.contianer}>
      <Head>
        <title>ljh | 이진환</title>
      </Head>
      <article className={style.article}>
        <h1 className={style.name}>이진환</h1>
        <h2 className={style.nameTitle}>컴퓨테이셔널 디자이너 | 건축사</h2>

        <hr className={style.divider} />
        <section>
          <p>공간을 코딩하는 컴퓨테이셔널 디자이너이자 건축사 이진환 입니다.</p>
          <p>
            건축을 전공하고, 건축사 자격을 취득한 이후 건축사사무소를
            개업했다가, 현재는{" "}
            <a
              href="https://flexity.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flexity
            </a>
            라는 자동 기획 설계 서비스를 만들고있는 Editcollective에서
            지오메트리 알고리즘을 개발하고 있습니다.
          </p>
          <p>
            좋은 공간, 좋은 환경을 만들기 위한 노력을 많은 사람들에게 제공하고자
            컴퓨터의 힘을 빌려 디자인 하고 있습니다.
          </p>
        </section>
        <hr className={style.divider} />
        <p className={style.contact}>
          e.{" "}
          <Link href="mailto:ljh@ljh.studio">
            <a target="_blank" rel="noopener noreferrer">
              ljh@ljh.studio
            </a>
          </Link>
        </p>
        <p className={style.contact}>
          i.{" "}
          <Link href="https://www.instagram.com/ljh_architects/">
            <a target="_blank" rel="noopener noreferrer">
              @ljh_architects
            </a>
          </Link>
        </p>
      </article>
    </div>
  );
};

export default About;
