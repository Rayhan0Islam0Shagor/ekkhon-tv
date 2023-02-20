import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "../../../../styles/newsDetails.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const NewsDetails = ({ news }) => {
  const { contentDetails, writerInfo } = news;
  const [loading, setLoading] = useState(true);

  const title = `${contentDetails[0].ContentHeading} | Ekhon TV :: এখন টিভি`;
  const description = `${contentDetails[0].ContentBrief}`;
  const keywords = `${contentDetails[0].Keywords + contentDetails[0].Tags}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ekhon.tv/media/common/favicon2.png" />
        <meta name="author" content="Ekhon TV" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-5 pt-0 mx-auto sm:p-5 md:p-10 md:pt-0 text-gray-900"
      >
        <div className="flex flex-col max-w-5xl mx-auto overflow-hidden rounded">
          <div className="flex items-center justify-start w-full py-5">
            <Link
              href="/"
              className="px-4 py-2 font-bold uppercase transition-all duration-500 border border-indigo-400 hover:bg-indigo-400"
            >
              Go back
            </Link>
          </div>

          <h1 className="block text-xl pb-4 font-semibold sm:text-3xl">
            {contentDetails[0].ContentHeading}
          </h1>

          <div className="relative overflow-hidden rounded-md flex items-center justify-center w-full">
            <Image
              height={750}
              width={1440}
              alt={contentDetails[0].ImageBgPathCaption}
              src={`https://backoffice.ekhon.tv/media/imgAll/${contentDetails[0].ImageBgPath}`}
              className={`w-full h-72 sm:h-96  object-cover rounded-md transition-opacity duration-200 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => {
                setLoading(false);
              }}
              priority
              placeholder="blur"
              blurDataURL={`https://backoffice.ekhon.tv/media/imgAll/${
                contentDetails[0].ImageSmPath ||
                contentDetails[0].ImageThumbPath
              }`}
            />
            {loading && (
              <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-75 animate-pulse" />
            )}
          </div>

          <div className="relative p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-4xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-100">
            <div className="space-y-2">
              <span className="inline-block text-2xl font-semibold sm:text-xl">
                {contentDetails[0].ImageBgPathCaption}
              </span>
              <p className="text-xs dark:text-gray-700">
                By{" "}
                <span className="text-xs hover:underline">
                  {writerInfo.WriterName || contentDetails[0].WriterName}
                </span>
              </p>
            </div>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{
                __html: contentDetails[0].ContentDetails,
              }}
            ></div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NewsDetails;

export async function getServerSideProps(ctx) {
  const { category, newsId } = ctx.query;
  // fetch news details
  const response = await fetch(
    `https://backoffice.ekhon.tv/api/content-details/${category}/${newsId}`
  );
  const news = await response.json();

  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      news,
    },
  };
}
