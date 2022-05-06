import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { IpostPage } from "../../types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import style from "../../styles/components/postcontent.module.css";

export const PostPage: NextPage<IpostPage> = ({
  frontmatter: { title, date, cover_image },
  content,
}) => {
  return (
    <>
      <Image
        className={style.coverImg}
        src={cover_image}
        alt="cover_image"
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="cover"
      />
      <div className={style.card}>
        <h1 className={style.postTitle}>{title}</h1>
        <div className={style.postDate}>{`posted on ${date}`}</div>
        <div className={style.postBody}>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
      <Link href="/blog">
        <a className="btn">Go Back</a>
      </Link>
    </>
  );
};
export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
};
