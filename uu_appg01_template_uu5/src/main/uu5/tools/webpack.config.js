var buildHelpers = require("./helpers.js");

var config = require("../.tmp/config.json"); // generated by tools/build-uc.js
var packages = buildHelpers.getProjectPackageList(config.sourcePath);

var webpackConfig = [].concat(buildHelpers.getWebpackConfig(Object.assign({ copyFiles: true }, config)));
webpackConfig = packages.reduce((r, pack) => r.concat(buildHelpers.getWebpackConfig(Object.assign({}, config, {
  libraryName: pack.moduleName,
  libraryFileName: pack.name + "/" + pack.name + (config.minify ? ".min" : "") + ".js",
  entryPoints: [pack.entryPoint]
}))), webpackConfig);

module.exports = webpackConfig;