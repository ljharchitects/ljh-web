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
import "highlight.js/styles/default.css";
import Layout from "../../components/Layout";
import { markedOptions } from "../../utils/markedOptions";

export interface IpostPage {
  frontmatter: Ifrontmatter;
  slug: string;
  content: string;
  prev_slug: string;
  next_slug: string;
}

export const PostPage: NextPage<IpostPage> = ({
  frontmatter: { title, date, cover_image, excerpt },
  content,
  prev_slug,
  next_slug,
}) => {
  marked.setOptions(markedOptions);
  console.log(marked.parse(content));
  return (
    <>
      {/* <Head>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"
        ></link>
      </Head> */}
      <Layout>
        <div className={style.card}>
          <div className={style.coverImg}>
            <Image
              src={cover_image}
              alt="cover_image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={style.textContainer}>
            <h1 className={style.postTitle}>{title}</h1>
            <div className={style.excerpt}>{`${excerpt}`}</div>
            <div className={style.postDate}>{`${date}`}</div>
            <article className={style.postBody}>
              <div
                dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
              ></div>
              {/* <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div> */}
            </article>
            {/* <div className={style.postFooter}>
            <div>
              <Link href={`/blog/${prev_slug}`} passHref>
                <a>{prev_slug}</a>
              </Link>
              <Link href={`/blog/${next_slug}`} passHref>
                <a>{next_slug}</a>
              </Link>
            </div>
            <Link href="/blog">
              <a className="btn">Go Back</a>
            </Link>
          </div> */}
          </div>
        </div>
      </Layout>
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
