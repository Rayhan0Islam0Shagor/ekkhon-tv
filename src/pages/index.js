import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home({ data }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Head>
        <title>Server Side | Ekhon TV :: এখন টিভি</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

      <main className="max-w-screen-xl p-5 mx-auto ">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
          {data?.map(
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
              <div
                key={index}
                className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
                style={{
                  backgroundImage: `url(https://backoffice.ekhon.tv/media/imgAll/${ImageBgPath})`,
                }}
              >
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900" />
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <span className="px-3 py-2 text-xs font-semibold tracking-wider uppercase  text-gray-900 bg-[#FCB415]">
                    {CategoryName}
                  </span>
                  <div className="flex flex-col justify-start text-center dark:text-gray-100">
                    <span className="text-3xl font-semibold leading-none tracking-wide">
                      {
                        new Date(created_at)
                          .toLocaleDateString("bn-BD", {
                            month: "long",
                            day: "numeric",
                          })
                          .split(" ")[0]
                      }
                    </span>
                    <span className="leading-none uppercase">
                      {
                        new Date(created_at)
                          .toLocaleDateString("bn-BD", {
                            month: "long",
                            day: "numeric",
                          })
                          .split(" ")[1]
                      }
                    </span>
                  </div>
                </div>
                <div className="z-10">
                  <h2 className="px-3 pb-2">
                    <Link
                      href={`/${Slug}/news/${ContentID}`}
                      className="font-semibold  text-md hover:underline text-[#FCB415]"
                    >
                      {ContentHeading}
                    </Link>
                  </h2>
                  <p className="px-3 pb-1 font-medium text-sm text-gray-300">
                    {ContentBrief.substring(0, 100) + "..."}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    </>
  );
}

// <Link
//   href={`/${Slug}/news/${ContentID}`}
//   className="flex items-center justify-center w-full h-full col-span-6  md:col-span-3 lg:col-span-1"
//   key={Slug + "_" + created_at}
// >
//   <div className="flex flex-col items-start justify-start w-full h-full overflow-hidden border rounded-lg shadow-lg">
//     <div className="relative flex items-center justify-center w-full border-b">
//       <Image
//         height={630}
//         width={1200}
//         alt={ContentHeading}
//         src={`https://backoffice.ekhon.tv/media/imgAll/${ImageBgPath}`}
//         className={`w-full h-auto transition-opacity duration-200 ${
//           loading ? "opacity-0" : "opacity-100"
//         }`}
//         onLoad={() => {
//           setLoading(false);
//         }}
//         priority
//         placeholder="blur"
//         blurDataURL={`https://backoffice.ekhon.tv/media/imgAll/${
//           ImageSmPath || ImageThumbPath
//         }`}
//       />
//       {loading && (
//         <div className="absolute top-0 left-0 w-full h-full bg-gray-100 opacity-75 animate-pulse" />
//       )}
//     </div>

//     <div className="flex flex-col flex-1">
//       <div className="flex-1 w-full p-4 border-b">
//         <h1 className="pb-2 text-xl font-semibold">
//           {ContentHeading}
//         </h1>
//         <p className="py-1 text-sm">{ContentBrief}</p>
//       </div>

//       <div className="flex flex-row-reverse items-center justify-between w-full p-4">
//         <span>
//           {new Date(created_at).toLocaleDateString("bn-BD", {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//           }) + " "}
//         </span>

//         <button
//           type="button"
//           className="px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-700 active:bg-gray-600"
//         >
//           {CategoryName}
//         </button>
//       </div>
//     </div>
//   </div>
// </Link>

export async function getServerSideProps() {
  const res = await fetch(
    "https://backoffice.ekhon.tv/api/json/file/generateSpecial1.json"
  );
  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
}
