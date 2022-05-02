import type { GetStaticProps } from "next";
import type { Iposts } from "../../types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../../components/Post";
import InfiniteScrollLoop from "../../components/InfiniteScrollLoop";
import { sortByDate } from "../../utils";

export default function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>ljh | log</title>
      </Head>
      <div className="posts">
        <InfiniteScrollLoop>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </InfiniteScrollLoop>
      </div>
    </>
  );
}
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
