import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div className="card">
      <Link href={`/blog/${post.slug}`} passHref>
        <div className="container">
          <img src={post.frontmatter.cover_image} alt="" width="300px" />
          <div className="post-date">{post.frontmatter.date}</div>
          <h3>{post.frontmatter.title}</h3>
          <p>{post.frontmatter.excerpt}</p>

          <a className="btn">Read More</a>
        </div>
      </Link>
    </div>
  );
};

export default Post;
