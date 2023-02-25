import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const NewsCard = ({
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
  index,
}) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3, duration: 0.5 }}
      key={index}
      className="relative flex items-end justify-start w-full text-left bg-right-top bg-no-repeat bg-cover h-72 dark:bg-gray-500"
      // style={{
      //   backgroundImage: `url(https://backoffice.ekhon.tv/media/imgAll/${ImageBgPath})`,
      // }}
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

      <div className="absolute inset-0 bg-gradient-to-b via-transparent from-transparent to-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-b via-transparent from-gray-600 to-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-b via-transparent from-transparent to-gray-900" />
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
        {CategoryName && (
          <span className="px-3 py-2 text-xs font-semibold tracking-wider uppercase  text-gray-900 bg-[#FCB415]">
            {CategoryName}
          </span>
        )}
        {created_at && (
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
        )}
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
        {ContentBrief && (
          <p className="px-3 pb-1 text-sm font-medium text-gray-300">
            {ContentBrief.substring(0, 70) + "..."}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default NewsCard;
