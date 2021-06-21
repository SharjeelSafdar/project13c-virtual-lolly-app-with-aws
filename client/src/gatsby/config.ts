import { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

export default {
  siteMetadata: {
    title: `Virtual Lolly App`,
    description: `A Serverless JAMstack Virtual Lolly App With Gatsby, Storybook, DynamoDB, AppSync, Lambda, CloudFront and TypeScript`,
    author: {
      name: `Mian Muhammad Sharjeel Safdar`,
      email: `miansharjeelsafdar@gmail.com`,
      github: `https://github.com/SharjeelSafdar/`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Virtual Lolly App`,
        short_name: `Virtual Lolly`,
        start_url: `/`,
        background_color: `#fa73d9`,
        theme_color: `#fa73d9`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
} as GatsbyConfig;
