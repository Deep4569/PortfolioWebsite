const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("F:\\personalWebsite\\node_modules\\gatsby-plugin-offline\\app-shell.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("F:\\personalWebsite\\src\\templates\\post.js"))),
  "component---src-templates-tag-js": hot(preferDefault(require("F:\\personalWebsite\\src\\templates\\tag.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("F:\\personalWebsite\\src\\pages\\404.js"))),
  "component---src-pages-archive-js": hot(preferDefault(require("F:\\personalWebsite\\src\\pages\\archive.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("F:\\personalWebsite\\src\\pages\\index.js"))),
  "component---src-pages-pensieve-index-js": hot(preferDefault(require("F:\\personalWebsite\\src\\pages\\pensieve\\index.js"))),
  "component---src-pages-pensieve-tags-js": hot(preferDefault(require("F:\\personalWebsite\\src\\pages\\pensieve\\tags.js")))
}

