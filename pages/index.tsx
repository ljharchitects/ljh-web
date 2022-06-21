import type { GetStaticProps, NextPage } from "next";
import type { Ipost, Ifrontmatter } from "../types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import InfiniteScrollLoop from "../components/InfiniteScrollLoop";
import { sortByDate } from "../utils";

export const Posts: NextPage<{ posts: Ipost[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>ljh | log</title>
      </Head>
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
        {/* <InfiniteScrollLoop>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </InfiniteScrollLoop> */}
      </div>
    </>
  );
};
export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
};
