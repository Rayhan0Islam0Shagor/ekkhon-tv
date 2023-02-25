import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";
import dynamic from "next/dynamic";
// import FeaturedNews from "@/components/FeaturedNews";

const NewsCard = dynamic(() => import("@/components/NewsCard"), {
  ssr: true,
});
const FeaturedNews = dynamic(() => import("@/components/FeaturedNews"), {
  ssr: true,
});

export default function Home({ data = [], latest = [], categorySeven = [] }) {
  return (
    <>
      <Head>
        <title>Server Side | Ekhon TV :: এখন টিভি</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://ekhon.tv/media/common/favicon2.png" />
        <meta
          name="keywords"
          content="এখন টিভি,অনলাইন পত্রিকা, পত্রিকা, বাংলাদেশ পত্রিকা, আজকের পত্রিকা, দেশে এখন, বাজার, কাচা বাজার, মুদ্রা বাজার, শেয়ার বাজার, আন্তর্জাতিক বাজার, ক্রিপ্টো, বিদেশে এখন, ক্রিকেট, ফুটবল, এখন মাঠে, এখন আনন্দ, সিনেমা, নাটক, তথ্য প্রযুক্তি, নাগরিক সাংবাদিকতা, পাঠকের কথা, চলতি হাওয়া, পরিবেশ, আবহাওয়া, উদ্যোক্তা"
        />
      </Head>

      <div className="flex items-center justify-center w-full py-5">
        <Link
          href="/csr"
          className="px-4 py-2 transition-all duration-500 border border-indigo-400 hover:bg-indigo-400"
        >
          Check client side rendering
        </Link>
      </div>

      <main className="max-w-screen-xl px-4 lg:px-0 mx-auto ">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2">
          {data
            ?.slice(0, 3)
            ?.map(
              (
                {
                  CategoryID,
                  CategoryName,
                  ContentBrief,
                  ContentHeading,
                  ImageBgPath,
                  ImageSmPath,
                  ImageThumbPath,
                  ShowVideo,
                  Slug,
                  URLAlies,
                  VideoID,
                  created_at,
                  VideoType,
                  ContentID,
                },
                index
              ) => (
                <NewsCard
                  key={index}
                  index={index}
                  CategoryID={CategoryID}
                  CategoryName={CategoryName}
                  ContentBrief={ContentBrief}
                  ContentHeading={ContentHeading}
                  ImageBgPath={ImageBgPath}
                  ImageSmPath={ImageSmPath}
                  ImageThumbPath={ImageThumbPath}
                  ShowVideo={ShowVideo}
                  Slug={Slug}
                  URLAlies={URLAlies}
                  VideoID={VideoID}
                  created_at={created_at}
                  VideoType={VideoType}
                  ContentID={ContentID}
                />
              )
            )}
        </div>

        <div className="my-10">
          <FeaturedNews data={data?.slice(3)} />
        </div>

        <div className="grid my-6 grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 h-full">
          {latest?.map(
            (
              {
                CategoryID,
                ContentID,
                ContentHeading,
                ImageSmPath,
                ImageThumbPath,
                ShowVideo,
                Slug,
                URLAlies,
                imgUrl = "https://backoffice.ekhon.tv/media/imgAll/",
              },
              index
            ) => (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
                key={index}
                className="col-span-1 rounded-b rounded-t lg:rounded-t-none lg:rounded-l lg:rounded-b-none lg:rounded-r  h-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400"
              >
                <Link
                  href={`/${Slug}/news/${ContentID}`}
                  className="w-full h-full lg:max-w-full lg:flex"
                >
                  <div
                    className="h-48 lg:w-48 flex-none bg-cover  text-center overflow-hidden"
                    style={{
                      backgroundImage: `url(${imgUrl}${ImageSmPath})`,
                    }}
                    title="Mountain"
                  ></div>
                  <div className=" bg-white p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <p className="text-sm text-gray-600 flex items-center mb-3">
                        {Slug}
                      </p>
                      <div className="text-gray-900 font-bold text-lg">
                        {ContentHeading}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          )}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  // const { data } = await axios.get(
  //   "https://backoffice.ekhon.tv/api/json/file/generateSpecial1.json"
  // );

  const [{ data: featured }, { data: latest }, { data: categorySeven }] =
    await Promise.all([
      axios.get(
        `https://backoffice.ekhon.tv/api/json/file/generateSpecial1.json`
      ),
      axios.get(
        `https://backoffice.ekhon.tv/api/json/file/generateLatest.json`
      ),
      axios.get(
        `https://backoffice.ekhon.tv/api/json/file/generateCategory7.json`
      ),
    ]);
  // const [latest, categorySeven] = await Promise.all([
  //   latestNewsRes.json(),
  //   categorySevenRes.json(),
  // ]);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      data: featured.data,
      latest: latest.data,
      categorySeven: categorySeven.data,
    },
  };
}
