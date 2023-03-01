import React from "react";
import Link from "next/link";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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
            CategoryName,
            ContentHeading,
            ImageBgPath,
            Slug,
            created_at,
            ContentID,
          },
          index
        ) => (
          <div className="px-2 overflow-hidden  w-full">
            <img
              src={`https://backoffice.ekhon.tv/media/imgAll/${ImageBgPath}`}
              alt={ContentHeading}
              loading="lazy"
              className="w-full object-contain h-32 sm:h-48 md:h-64"
            />
            <div className="px-4  py-2">
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
