import Link from "next/link";
import Image from "next/image";
import style from "../styles/components/post.module.css";

const Post = ({ post }) => {
  return (
    <div className={style.card}>
      <Link href={`/blog/${post.slug}`} passHref>
        <div className={style.container}>
          <Image
            src={post.frontmatter.cover_image}
            alt=""
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
          />
          {/* <img src={post.frontmatter.cover_image} alt="" width="100%" /> */}
          {/* <div className="post-date">{post.frontmatter.date}</div>
          <h3>{post.frontmatter.title}</h3>
          <p>{post.frontmatter.excerpt}</p>

          <a className="btn">Read More</a> */}
        </div>
      </Link>
    </div>
  );
};

export default Post;
