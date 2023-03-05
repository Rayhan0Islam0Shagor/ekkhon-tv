import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const LatestNews = ({ data = [] }) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2 ">
      <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-72 md:col-span-2 lg:row-span-2 lg:h-full group dark:bg-gray-500">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Image
            height={900}
            width={900}
            src={`https://backoffice.ekhon.tv/media/imgAll/${data[0].ImageBgPath}`}
            alt={data[0].ContentHeading}
            className={`w-full h-full absolute inset-0 object-cover transition-opacity duration-200 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => {
              setLoading(false);
            }}
            priority
            placeholder="blur"
            blurDataURL={`https://backoffice.ekhon.tv/media/imgAll/${
              data[0].ImageSmPath || data[0].ImageThumbPath
            }`}
          />

          {loading && (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-100 animate-pulse" />
          )}
        </motion.div>

        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900" />
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
          <span className="px-3 py-2 text-xs font-semibold tracking-wider uppercase  text-gray-900 bg-[#FCB415]">
            {data[0].CategoryName}
          </span>
          <div className="flex flex-col justify-start text-center dark:text-gray-100">
            <span className="text-3xl font-semibold leading-none tracking-wide">
              {
                new Date(data[0].created_at)
                  .toLocaleDateString("bn-BD", {
                    month: "long",
                    day: "numeric",
                  })
                  .split(" ")[0]
              }
            </span>
            <span className="leading-none uppercase">
              {
                new Date(data[0].created_at)
                  .toLocaleDateString("bn-BD", {
                    month: "long",
                    day: "numeric",
                  })
                  .split(" ")[1]
              }
            </span>
          </div>
        </div>
        <h2 className="z-10 p-5">
          <Link
            href={`/${data[0].Slug}/news/${data[0].ContentID}`}
            className="font-medium text-md hover:underline lg:text-2xl lg:font-semibold text-[#FCB415]"
          >
            {data[0].ContentHeading}
          </Link>
        </h2>
      </div>

      {data
        .slice(1, 5)
        .map(
          (
            {
              CategoryName,
              ContentHeading,
              ImageBgPath,
              ImageSmPath,
              ImageThumbPath,
              Slug,
              created_at,
              ContentID,
            },
            index
          ) => (
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-72 group dark:bg-gray-500"
              key={index}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5 * (index + 1),
                  duration: 0.5,
                }}
              >
                <Image
                  height={630}
                  width={1200}
                  src={`https://backoffice.ekhon.tv/media/imgAll/${
                    ImageBgPath || ImageThumbPath
                  }`}
                  alt={ContentHeading}
                  className={`w-full h-full absolute inset-0 object-cover transition-opacity duration-200 ${
                    loading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={() => {
                    setLoading(false);
                  }}
                  priority
                  placeholder="blur"
                  // https://backoffice.ekhon.tv/media/imgAll/2023February/THUMB/
                  blurDataURL={`https://backoffice.ekhon.tv/media/imgAll/${
                    ImageSmPath || ImageThumbPath
                  }`}
                />
                {loading && (
                  <div className="absolute top-0 left-0 w-full h-full bg-gray-100 animate-pulse" />
                )}
              </motion.div>

              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
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
              <h2 className="z-10 p-5">
                <Link
                  href={`/${Slug}/news/${ContentID}`}
                  className="font-semibold  text-md hover:underline text-[#FCB415]"
                >
                  {ContentHeading}
                </Link>
              </h2>
            </div>
          )
        )}
    </div>
  );
};

export default LatestNews;
