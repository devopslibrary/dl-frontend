// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

var proxy = require("http-proxy-middleware");

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });

  // Need to proxy to API for local dev, otherwise CORS prevents it!
  api.configureServer(app => {
    app.use(
      "/orgs",
      proxy({
        target: "http://localhost:3000"
      })
    );
  });
};
