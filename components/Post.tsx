import Link from "next/link";
import Image from "next/image";
import style from "../styles/components/post.module.css";
import { Ifrontmatter } from "../types";
import { NextPage } from "next";

interface Ipost {
  post: {
    slug: string;
    frontmatter: Ifrontmatter;
  };
}

const Post: NextPage<Ipost> = ({ post }) => {
  return (
    <>
      <Link href={`/blog/${post.slug}`} passHref>
        <div className={style.card}>
          <div className={style.featureImage}>
            <Image
              src={post.frontmatter.cover_image}
              alt=""
              width="100%"
              height="100%"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={style.textContainer}>
            <h1 className={style.title}>{post.frontmatter.title}</h1>
            <div className={style.excerpt}>{post.frontmatter.excerpt}</div>
            <div className={style.tags}>
              {post.frontmatter.tags &&
                post.frontmatter.tags.map((tag, index) => (
                  <div className={style.tag} key={index}>
                    {tag}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
Post.displayName = "Post";

export default Post;
