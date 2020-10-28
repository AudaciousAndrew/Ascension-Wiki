const path = require("path");

function resolvePath(appPath) {
  return path.join(__dirname, "..", appPath);
}

module.exports = {
  appBuild: resolvePath("build"),
  appPublic: resolvePath("public"),
  appHTML: resolvePath("public/index.html"),
  appNodeModules: resolvePath("node_modules"),
  appEntryJS: resolvePath("src/index.tsx"),
  alias: {
    images: resolvePath("src/assets/images"),
    components: resolvePath("src/components"),
    utils: resolvePath("src/utils"),
    types: resolvePath("src/types"),
    routes: resolvePath("src/routes"),
    assets: resolvePath("src/assets")
  }
};
