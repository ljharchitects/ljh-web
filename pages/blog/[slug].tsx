import next, { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Ifrontmatter } from "../../types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import style from "../../styles/components/postcontent.module.css";

export interface IpostPage {
  frontmatter: Ifrontmatter;
  slug: string;
  content: string;
  prev_slug: string;
  next_slug: string;
}

export const PostPage: NextPage<IpostPage> = ({
  frontmatter: { title, date, cover_image },
  content,
  prev_slug,
  next_slug,
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
        <div className={style.postDate}>{`${date}`}</div>
        <div className={style.postBody}>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
      <Link href={`/blog/${prev_slug}`} passHref>
        <a>prev slug</a>
      </Link>
      <Link href={`/blog/${next_slug}`} passHref>
        <a>next_slug</a>
      </Link>
      <Link href="/blog">
        <a className="btn">Go Back</a>
      </Link>
    </>
  );
};
export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename, index) => ({
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

  const files = fs.readdirSync(path.join("posts"));
  const fileIndex = files.findIndex((filename) => {
    return filename.replace(".md", "") === slug;
  });
  const next_i = (fileIndex + 1) % files.length;
  const perv_i = fileIndex === 0 ? files.length - 1 : fileIndex - 1;

  const prev_slug = files[perv_i].replace(".md", "");
  const next_slug = files[next_i].replace(".md", "");

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
      prev_slug,
      next_slug,
    },
  };
};
