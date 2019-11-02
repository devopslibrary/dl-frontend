// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  host: process.env.HOSTNAME,
  port: 8080,
  transformers: {
    remark: {},
  },
  siteName: 'DevOps Library',
  siteUrl: 'https://devopslibrary.github.io',
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "lessons/**/*.md",
        typeName: "Lesson",
        remark: {
          plugins: [
            'gridsome-plugin-remark-youtube',
            [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: false } ],
            'remark-toc'
          ]
        }
      }
    }
  ]
};
