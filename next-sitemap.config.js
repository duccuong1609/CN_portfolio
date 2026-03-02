/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://cuong-nguyen.dev",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
};
