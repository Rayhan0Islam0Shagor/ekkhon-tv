import Head from "next/head";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";

export default function CSR() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(
          "https://backoffice.ekhon.tv/api/json/file/generateSpecial1.json"
        );
        const data = await res.json();

        setData(data.data);
      };

      fetchData();
    } catch (error) {
      console.log("🚀 ~ file: index.js:22 ~ useEffect ~ error", error);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Client Side | Ekhon TV :: এখন টিভি</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ekhon.tv/media/common/favicon2.png" />
        <meta
          name="keywords"
          content="এখন টিভি,অনলাইন পত্রিকা, পত্রিকা, বাংলাদেশ পত্রিকা, আজকের পত্রিকা, দেশে এখন, বাজার, কাচা বাজার, মুদ্রা বাজার, শেয়ার বাজার, আন্তর্জাতিক বাজার, ক্রিপ্টো, বিদেশে এখন, ক্রিকেট, ফুটবল, এখন মাঠে, এখন আনন্দ, সিনেমা, নাটক, তথ্য প্রযুক্তি, নাগরিক সাংবাদিকতা, পাঠকের কথা, চলতি হাওয়া, পরিবেশ, আবহাওয়া, উদ্যোক্তা"
        />
      </Head>

      <div className="py-5 w-full flex justify-center items-center">
        <Link
          href="/"
          className="border hover:bg-indigo-400 transition-all duration-500  py-2 px-4 border-indigo-400"
        >
          Check server side rendering
        </Link>
      </div>

      <main className="container h-full grid grid-cols-3 gap-2">
        {data.map(
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
            },
            index
          ) => (
            <div
              className="p-8 w-full h-full flex items-center justify-center col-span-1"
              key={index}
            >
              <div className="w-full h-full overflow-hidden shadow-lg flex items-start justify-start flex-col border dark:border-gray-800 rounded-lg">
                <div className="w-full flex items-center justify-center border-b dark:border-gray-800 relative">
                  <img
                    alt="Forest"
                    src="https://source.unsplash.com/1200x630/?forest"
                    width="1200"
                    height="630"
                    className={`w-full h-auto transition-opacity duration-200 ${
                      loading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => {
                      setLoading(false);
                    }}
                  />
                  {loading && (
                    <div className="absolute w-full h-full top-0 left-0 animate-pulse bg-gray-100 dark:bg-gray-900" />
                  )}
                </div>

                <div className="flex flex-col flex-1">
                  <div className="p-4 w-full flex-1 border-b dark:border-gray-800">
                    <span className="text-xl font-semibold">
                      {ContentHeading}
                    </span>
                    <p className="py-1 text-sm">{ContentBrief}</p>
                  </div>

                  <div className="p-4 w-full flex items-center justify-start flex-row-reverse">
                    <button
                      type="button"
                      className="bg-gray-800 py-2 px-4 text-white rounded-lg hover:bg-gray-700 active:bg-gray-600"
                    >
                      {CategoryName}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </main>
    </>
  );
}
