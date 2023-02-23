import { getServerSideSitemapIndex } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const res = await fetch(
    "https://backoffice.ekhon.tv/api/json/file/generateSpecial1.json"
  );
  const data = await res.json();

  const fields =
    data &&
    data.data.map((item) => ({
      loc: `https://ekkhon-tv.vercel.app/${item.Slug}/news/${item.ContentID}`,
      lastmod: new Date(item.created_at).toISOString(),
    }));

  return getServerSideSitemapIndex(ctx, fields);
};

// Default export to prevent next.js errors
export default function SitemapIndex() {}
