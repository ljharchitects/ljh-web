import type { GetStaticProps, NextPage } from "next";
import type { Ipost, Ifrontmatter } from "../types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import { sortByDate } from "../utils";
import Layout from "../components/Layout";

export const Posts: NextPage<{ posts: Ipost[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>ljh | 이진환</title>
      </Head>
      <Layout>
        <div className="posts">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </Layout>
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
