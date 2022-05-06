import Link from "next/link";
import Image from "next/image";
import style from "../styles/components/post.module.css";
import {
  useRef,
  useEffect,
  FunctionComponent,
  forwardRef,
  useCallback,
  useState,
} from "react";
import { Ifrontmatter } from "../types";
import { NextPage } from "next";

interface Ipost {
  post: {
    slug: string;
    frontmatter: Ifrontmatter;
  };
}

const Post: NextPage<Ipost> = ({ post }) => {
  // const positionRef = useRef();

  // const handleScroll = useCallback(() => {
  //   if (positionRef.current) {
  //     const scroll = positionRef.current.scrollTop;
  //     console.log(scroll);
  //     // if (scroll <= backupHeight || scroll >= backupHeight + height) {
  //     //   positionRef.current.scrollTop = backupHeight + (scroll % height);
  //     // }
  //   }
  // }, [positionRef]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  // useEffect(() => {
  //   if (positionRef.current) {
  //     console.log(positionRef);
  //     console.log(positionRef.current.offsetTop);
  //   }
  // });
  const [hover, setHover] = useState(false);

  return (
    <div
      className={style.card}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <Link href={`/blog/${post.slug}`} passHref>
        <div className={style.container}>
          <div className={hover ? style.title : style.hide}>
            {post.frontmatter.title}
          </div>
          <Image
            src={post.frontmatter.cover_image}
            alt=""
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </Link>
    </div>
  );
};
Post.displayName = "Post";

export default Post;
