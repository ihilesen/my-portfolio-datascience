module.exports = {
  pathPrefix: "/my-portfolio-datascience",
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://ihilesen.tech/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/logo_brown.png", // Path is relative to the root
          siteName: "Ihilesen's Portfolio", // Used in manifest.json
          shortName: "Ihilesen", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#121010", // Used in manifest.json
          themeColor: "#FFFFFF", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
      },
    },
  ],
};
