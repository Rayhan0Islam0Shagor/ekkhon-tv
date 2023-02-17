import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Ekhon TV :: এখন টিভি"
        titleTemplate="Ekhon TV :: এখন টিভি"
        defaultTitle="Ekhon TV :: এখন টিভি"
        description="Ekhon TV is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news."
        keywords="এখন টিভি,অনলাইন পত্রিকা, পত্রিকা, বাংলাদেশ পত্রিকা, আজকের পত্রিকা, দেশে এখন, বাজার, কাচা বাজার, মুদ্রা বাজার, শেয়ার বাজার, আন্তর্জাতিক বাজার, ক্রিপ্টো, বিদেশে এখন, ক্রিকেট, ফুটবল, এখন মাঠে, এখন আনন্দ, সিনেমা, নাটক, তথ্য প্রযুক্তি, নাগরিক সাংবাদিকতা, পাঠকের কথা, চলতি হাওয়া, পরিবেশ, আবহাওয়া, উদ্যোক্তা"
        canonical="https://ekhon.tv/"
        author="Ekhon TV :: এখন টিভি"
        openGraph={{
          url: "https://ekhon.tv/",
          title: "Ekhon TV :: এখন টিভি",
          description:
            "Ekhon TV is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news.",
          images: [
            {
              url: "https://ekhon.tv/media/common/favicon2.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          siteName: "https://ekhon.tv/",
        }}
        twitter={{
          handle: "@Ekhon TV :: এখন টিভি",
          site: "https://ekhon.tv/",
          cardType: "summary_large_image",
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
      />

      <NextNProgress
        options={{ easing: "ease", speed: 500, showSpinner: false }}
        color="#FCB415"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />

      <Component {...pageProps} />
    </>
  );
}
