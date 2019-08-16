const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = process.env.WEBSITE_URL;

module.exports = {
  siteMetadata: {
    siteUrl,
    themeColor: "#2c52da",
    backgroundColor: "#2c52da",
    pathPrefix: null,
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-no-sourcemaps",
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-webpack-size",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "~/components": path.resolve(__dirname, "src/components"),
          "~/static": path.resolve(__dirname, "src/static"),
          "~/styles": path.resolve(__dirname, "src/styles"),
          "~/helpers": path.resolve(__dirname, "src/helpers"),
          "~/store": path.resolve(__dirname, "src/store"),
        },
        extensions: ["js"],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: null,
      },
    },
    {
      resolve: "gatsby-plugin-react-helmet-canonical-urls",
      options: {
        siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./src/static/favicon.svg",
        appName: siteUrl,
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "en",
        background: "#2c52da",
        theme_color: "#2c52da",
        display: "standalone",
        orientation: "any",
        start_url: "/",
        version: "1.0",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};
