import React from "react";
import Link from "next/link";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const FeaturedNews = ({ data = [] }) => {
  return (
    <Slider {...settings}>
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
          <div className=" px-2 overflow-hidden  w-full">
            <img
              src={`https://backoffice.ekhon.tv/media/imgAll/${ImageBgPath}`}
              alt={ContentHeading}
              loading="lazy"
              className="w-full object-cover h-32 sm:h-48 md:h-64"
            />
            <div className="p-4 md:p-6">
              <p className="text-[#FCB415] font-semibold text-xs mb-1 leading-none">
                {CategoryName}
              </p>
              <Link
                href={`/${Slug}/news/${ContentID}`}
                className="font-bold mb-2 text-sm leading-tight sm:leading-normal"
              >
                {ContentHeading}
              </Link>
              <div className="text-sm font-semibold pt-2 flex items-center">
                <p className="leading-none">
                  {new Date(created_at).toLocaleDateString("bn-BD", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </Slider>
  );
};

export default FeaturedNews;
