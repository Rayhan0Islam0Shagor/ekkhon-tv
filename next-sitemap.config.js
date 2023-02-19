const siteUrl = "https://ekkhon-tv.vercel.app";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
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
    ],
  },
  exclude: ["/csr"],
};
