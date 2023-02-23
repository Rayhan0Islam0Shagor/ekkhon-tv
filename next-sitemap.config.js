const siteUrl = "https://ekkhon-tv.vercel.app";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: "daily",
  robotsTxtOptions: {
    // policies: [
    //   {
    //     userAgent: "*",
    //     allow: "/",
    //   },
    //   {
    //     userAgent: "*",
    //     disallow: "/csr",
    //   },
    // ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
      `${siteUrl}/server-sitemap-index.xml`,
    ],
  },
  exclude: ["/csr"],
};
