import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CsrNewsCard = ({
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
  index,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3, duration: 0.5 }}
      className="flex items-center justify-center w-full h-full col-span-6 md:col-span-3 lg:col-span-1"
      key={Slug + "_" + created_at}
    >
      <div className="flex flex-col items-start justify-start w-full h-full overflow-hidden border rounded-lg shadow-lg">
        <div className="relative flex items-center justify-center w-full border-b">
          <Image
            height={630}
            width={1200}
            alt={ContentHeading}
            src={`https://backoffice.ekhon.tv/media/imgAll/${ImageBgPath}`}
            className={`w-full h-auto transition-opacity duration-200 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => {
              setLoading(false);
            }}
            priority
            placeholder="blur"
            blurDataURL={`https://backoffice.ekhon.tv/media/imgAll/${ImageSmPath}`}
          />
          {loading && (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-100 animate-pulse" />
          )}
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex-1 w-full p-4 border-b">
            <h1 className="pb-2 text-xl font-semibold">{ContentHeading}</h1>
            <p className="py-1 text-sm">{ContentBrief}</p>
          </div>

          <div className="flex flex-row-reverse items-center justify-between w-full p-4">
            <span>
              {new Date(created_at).toLocaleDateString("bn-BD", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }) + " "}
            </span>

            <button
              type="button"
              className="px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-700 active:bg-gray-600"
            >
              {CategoryName}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CsrNewsCard;
