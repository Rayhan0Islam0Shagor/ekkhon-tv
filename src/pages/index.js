import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import dynamic from "next/dynamic";

const NewsCard = dynamic(() => import("@/components/NewsCard"), {
  ssr: true,
});
const FeaturedNews = dynamic(() => import("@/components/FeaturedNews"), {
  ssr: true,
});
const LatestNews = dynamic(() => import("@/components/LatestNews"), {
  ssr: true,
});

export default function Home({ data = [] }) {
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

      <main className="max-w-screen-xl px-4 mx-auto lg:px-0">
        <LatestNews data={data?.slice(0, 5)} />

        <div className="mt-10 mb-10">
          <FeaturedNews data={data} />
        </div>

        <div className="grid grid-cols-1 gap-5 mb-10 lg:grid-cols-3 sm:grid-cols-2">
          {data
            ?.slice(5, 8)
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
      </main>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  // const [{ data: featured }, { data: latest }, { data: categorySeven }] =
  //   await Promise.all([
  //     axios.get(
  //       `https://backoffice.ekhon.tv/api/json/file/generateSpecial1.json`
  //     ),
  //     axios.get(
  //       `https://backoffice.ekhon.tv/api/json/file/generateLatest.json`
  //     ),
  //     axios.get(
  //       `https://backoffice.ekhon.tv/api/json/file/generateCategory7.json`
  //     ),
  //   ]);
  // const [latest, categorySeven] = await Promise.all([
  //   latestNewsRes.json(),
  //   categorySevenRes.json(),
  // ]);

  const [{ data: featured }] = await Promise.all([
    axios.get(
      `https://backoffice.ekhon.tv/api/json/file/generateSpecial1.json`
    ),
  ]);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      data: featured.data,
    },
  };
}
