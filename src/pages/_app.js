import "@/styles/globals.css";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { NextSeo } from "next-seo";
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Ekhon TV :: এখন টিভি"
        titleTemplate="Ekhon TV :: এখন টিভি"
        defaultTitle="Ekhon TV :: এখন টিভি"
        description="Ekhon TV is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news."
        keywords="এখন টিভি,অনলাইন পত্রিকা, পত্রিকা, বাংলাদেশ পত্রিকা, আজকের পত্রিকা, দেশে এখন, বাজার, কাচা বাজার, মুদ্রা বাজার, শেয়ার বাজার, আন্তর্জাতিক বাজার, ক্রিপ্টো, বিদেশে এখন, ক্রিকেট, ফুটবল, এখন মাঠে, এখন আনন্দ, সিনেমা, নাটক, তথ্য প্রযুক্তি, নাগরিক সাংবাদিকতা, পাঠকের কথা, চলতি হাওয়া, পরিবেশ, আবহাওয়া, উদ্যোক্তা"
        canonical="https://ekhon.tv/"
        themeColor="#fff"
        author="Ekhon TV :: এখন টিভি"
        favicon="https://ekhon.tv/media/common/favicon2.png"
        openGraph={{
          type: "article",
          url: "https://ekhon.tv/",
          title: "Ekhon TV :: এখন টিভি",
          description:
            "Ekhon TV is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news.",
          images: [
            {
              url: "https://backoffice.ekhon.tv/media/common/logo-fb.png",
              width: 800,
              height: 400,
              alt: "Og Image Alt",
              type: "image/png",
            },
            {
              url: "https://backoffice.ekhon.tv/media/common/logo-fb.png",
              width: 1200,
              height: 630,
              alt: "Og Image Alt Second",
              type: "image/png",
            },
            { url: "https://backoffice.ekhon.tv/media/common/logo-fb.png" },
            { url: "https://backoffice.ekhon.tv/media/common/logo-fb.png" },
          ],
          siteName: "https://ekhon.tv/",
        }}
        twitter={{
          handle: "@Ekhon TV :: এখন টিভি",
          title: "Ekhon TV :: এখন টিভি",
          description:
            "Ekhon TV is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news.",
          site: "https://ekhon.tv/",
          image: "https://backoffice.ekhon.tv/media/common/logo-fb.png",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
          {
            name: "msvalidate.01",
            content: "msvalidate.01=0", // Bing
          },
          {
            name: "yandex-verification",
            content: "yandex-verification=0", // Yandex
          },
          {
            name: "p:domain_verify",
            content: "p:domain_verify=0", // Pinterest
          },
          {
            name: "alexaVerifyID",
            content: "alexaVerifyID=0", // Alexa
          },
          {
            name: "norton-safeweb-site-verification",
            content: "norton-safeweb-site-verification=0", // Norton
          },
          {
            name: "apple-itunes-app",
            content: "app-id=0", // Apple
          },
          {
            name: "google-play-app",
            content: "app-id=0", // Google Play
          },
          {
            name: "google-site-verification",
            content: "google-site-verification=0", // Google
          },
          {
            name: "facebook-domain-verification",
            content: "facebook-domain-verification=0", // Facebook
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
          {
            name: "twitter:site",
            content: "@Ekhon TV :: এখন টিভি",
          },
          {
            name: "twitter:creator",
            content: "@Ekhon TV :: এখন টিভি",
          },
          {
            name: "twitter:title",
            content: "Ekhon TV :: এখন টিভি",
          },
          {
            name: "twitter:description",
            content: "Ekhon TV is an online news portal of Bangladesh.",
          },
          {
            name: "twitter:image",
            content: "https://ekhon.tv/media/common/favicon2.png",
          },
          {
            name: "twitter:image:alt",
            content: "Ekhon TV :: এখন টিভি",
          },
          {
            name: "twitter:domain",
            content: "https://ekhon.tv/",
          },
          {
            name: "twitter:app:name:iphone",
            content: "Ekhon TV :: এখন টিভি",
          },
          {
            name: "twitter:app:id:iphone",
            content: "0",
          },
          {
            name: "twitter:app:url:iphone",
            content: "https://ekhon.tv/",
          },
          {
            name: "twitter:app:name:ipad",
            content: "Ekhon TV :: এখন টিভি",
          },
          {
            name: "twitter:app:id:ipad",
            content: "0",
          },
          {
            name: "twitter:app:url:ipad",
            content: "https://ekhon.tv/",
          },
          {
            name: "twitter:app:name:googleplay",
            content: "Ekhon TV :: এখন টিভি",
          },
          {
            name: "twitter:app:id:googleplay",
            content: "0",
          },
          {
            name: "twitter:app:url:googleplay",
            content: "https://ekhon.tv/",
          },
          {
            name: "twitter:app:country",
            content: "BD",
          },
          {
            name: "twitter:app:country",
            content: "US",
          },
          {
            name: "twitter:app:country",
            content: "IN",
          },
          {
            name: "twitter:app:country",
            content: "CA",
          },
          {
            name: "twitter:app:country",
            content: "AU",
          },
          {
            name: "twitter:app:country",
            content: "GB",
          },
          {
            name: "twitter:app:country",
            content: "NZ",
          },
          {
            name: "twitter:app:country",
            content: "IE",
          },
          {
            name: "twitter:app:country",
            content: "SG",
          },
        ]}
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

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          className="page-transition"
          transition={{
            type: "tween",
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            },
            exitState: {
              clipPath: "polygon(50% 0,50% 0,50% 100%,50% 100%)",
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
