import Head from "next/head";
import { Suspense } from "react";
import Experience from "../../components/webgl/Experience";
import CustomProgress from "../../components/webgl/util/CustomProgress";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>

      <Head>
        <title>ljh architects</title>
      </Head>
      <Suspense fallback={<CustomProgress />}>
        <Experience />
      </Suspense>
    </div>
  );
}
