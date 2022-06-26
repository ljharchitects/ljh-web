import Head from "next/head";
import { Suspense } from "react";
import Experience from "../../components/webgl/Experience";
import CustomProgress from "../../components/webgl/util/CustomProgress";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ljh | work</title>
      </Head>
      <Suspense fallback={<CustomProgress />}>
        <Experience />
      </Suspense>
    </div>
  );
}
