const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("F:\\personalWebsite\\src\\templates\\post.js"))),
  "component---src-templates-tag-js": hot(preferDefault(require("F:\\personalWebsite\\src\\templates\\tag.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("F:\\personalWebsite\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("F:\\personalWebsite\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("F:\\personalWebsite\\src\\pages\\index.js")))
}

