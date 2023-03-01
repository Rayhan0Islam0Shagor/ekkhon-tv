import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ColorThief from "colorthief";

const CsrNewsCard = ({
  CategoryName,
  ContentBrief,
  ContentHeading,
  ImageBgPath,
  ImageSmPath,
  Slug,
  created_at,
  index,
}) => {
  const imgRef = useRef(null);
  const [bgColor, setBgColor] = useState("#FCB415");
  const [color, setColor] = useState("#fff");
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
            crossOrigin="anonymous"
            ref={imgRef}
            src={`https://backoffice.ekhon.tv/media/imgAll/${ImageBgPath}`}
            className={`w-full h-auto transition-opacity duration-200 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            alt={ContentHeading}
            height={630}
            width={1200}
            onLoad={() => {
              setLoading(false);

              const colorThief = new ColorThief();
              const color = colorThief.getColor(imgRef.current);
              const rgb = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
              setBgColor(rgb);
              const textColor =
                color[0] * 0.299 + color[1] * 0.587 + color[2] * 0.114 > 186
                  ? "#1f2937d9"
                  : "#fff";
              setColor(textColor);
            }}
            priority
            placeholder="blur"
            blurDataURL={`https://backoffice.ekhon.tv/media/imgAll/${ImageSmPath}`}
          />
          {loading && (
            <div
              className="absolute top-0 left-0 w-full h-full animate-pulse"
              style={{
                backgroundColor: bgColor,
                opacity: 0.5,
              }}
            />
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
              className="px-4 py-2 font-medium rounded-lg hover:bg-gray-700 active:bg-gray-600"
              style={{
                backgroundColor: bgColor,
                color: color,
              }}
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
