import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import Experience from "../components/webgl/Experience";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ljh architects</title>
      </Head>
      <Experience />
    </div>
  );
}
