import React from "react";
import Image from "next/image";

const PostImage = ({ path }) => {
  return (
    <Image
      src={path}
      alt=""
      width="100%"
      height="100%"
      layout="responsive"
      objectFit="cover"
    />
  );
};

export default PostImage;
