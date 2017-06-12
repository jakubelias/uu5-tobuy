var fs = require("fs-extra");
var path = require("path");
var buildHelpers = require("../tools/helpers.js");

module.exports.getConfig = function () {
  "use strict"; // To avoid: Uncaught SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
  let isProductionBuild = (process.env.NODE_ENV == "production");
 // let isWithoutServer = !fs.existsSync("../server");
  let isWithoutServer = false;
  let srcDir = "src";
  let infix = (isProductionBuild ? ".min" : "");
  let cdnUri = "https://cdn.plus4u.net/"; // always end with slash

  let config = {
    isProductionBuild: isProductionBuild,

    // server/browser settings
    host: "0.0.0.0",
    port: 1234,
    https: false,
    autoOpenInBrowser: false,
    browserEnvironmentConfig: require(isProductionBuild ? "./uu-environment-prod.json" : "./uu-environment-dev.json"),
    devServerAppBaseUrlPath: (isWithoutServer ? "" : "/vendor-app/0-0/"), // URL path that serves as root for all content (only on webpack development server)

    // build settings
    sourcePath: srcDir,
    outputPath: (isWithoutServer ? "public" : "public"), // file system folder to build files to
    entryPoints: buildHelpers.getHtmlFilesFromMappingsJson()
                    .map(html => html.replace(/\.html?$/i, ".js"))
                    .filter(jsFile => fs.existsSync(path.join(srcDir, jsFile))), // files to build (relative to "src/", resp. sourcePath)
    // minify: isProductionBuild,
    minify: false,
    useSourceMaps: true,

    // routing settings
    // absolute URL path of the application root where app will be deployed on web server (typically "/" for app on a custom domain);
    // this must be configured only in case that client-side router is used and nested routes (routes in subfolders)
    // are required to work
    appBaseUrlPath: (isWithoutServer ? "/" : "/"),
    appAssetsRelativeUrlPath: (isWithoutServer ? "" : ""), // URL path (relative to appBaseUrlPath) where built client-side files are deployed

    // dependencies settings (react, ...)
    // - each dependency can be loaded from external URL or be bundled in the main JS file
    // - dependency configuration consists of providing path to the folder with dependency files and to the main JS file of the dependency
    // - path to the dependency folder can be given:
    //   1. Using "cdnBaseUri" field - this will be used if general configuration allows using CDN ("useCdn" option is true).
    //      This is the preferred way.
    //   2. Using "localBaseUri" field - relative path to the folder on file system with files of the dependency that
    //      are built for browser environment. This is typically node_modules/<module>/dist/, but some modules use different
    //      folder (e.g. react-router uses node_modules/react-router/umd/). It's also possible to manually prepare these files
    //      to src/lib/<depName>-<depVersion>/ folder and use that path. The build engine will copy whole folder to
    //      the output when performing build.
    //   3. Otherwise, the dependency won't be external and will be bundled into the main JS file. Note that while this will work
    //      correctly most of the time, some npm modules might require special way of bundling or perform on-demand loading of
    //      resources that the build engine won't know about - in such cases use "localBaseUri".
    // - dependency's main JS file is assumed to be <depName>.js, resp. <depName>.min.js if not explicitly given
    useCdn: true,
    dependencies: {
      "systemjs": { // in-browser loader used for loading all other dependencies
        cdnBaseUri: `${cdnUri}libs/systemjs/${getPackageJson('systemjs').version}/`,
        localBaseUri: `node_modules/systemjs/dist/`,
        main: isProductionBuild ? `system.js` : `system.src.js` // SystemJS uses non-standard naming (system.min.js doesn't exist; system.js is minified)
      },
      "react": {
        cdnBaseUri: `${cdnUri}libs/react/${getPackageJson('react').version}/`,
        localBaseUri: `node_modules/react/dist/`
      },
      "react-dom": {
        cdnBaseUri: `${cdnUri}libs/react/${getPackageJson('react-dom').version}/`, // on CDN it's in "react/" library
        localBaseUri: `node_modules/react-dom/dist/`
      },
      "jquery": {
        cdnBaseUri: `${cdnUri}libs/jquery/${getPackageJson('jquery').version}/`,
        localBaseUri: `node_modules/jquery/dist/`
      },
      "bootstrap": {
        cdnBaseUri: `${cdnUri}libs/bootstrap/${getPackageJson('bootstrap').version}/`,
        localBaseUri: `node_modules/bootstrap/dist/`,
        main: `js/bootstrap${infix}.js` // bootstrap uses non-standard path to its main file (nested in js/ folder)
      },
      "uu5g04": {
        cdnBaseUri: `${cdnUri}uu-uu5g04/${getPackageJson('uu5g04').version}/`,
        localBaseUri: `node_modules/uu5g04/dist/`
      },
      "uu_appg01_core": {
        cdnBaseUri: `${cdnUri}uu-appg01-core/${getPackageJson('uu_appg01_core').version}/`,
        localBaseUri: `node_modules/uu_appg01_core/dist/`,
      },
      "uu_appg01": {
        cdnBaseUri: `${cdnUri}uu-appg01/${getPackageJson('uu_appg01').version}/`,
        localBaseUri: `node_modules/uu_appg01/dist/`,
        main: `uu_appg01-base${infix}.js`
      },
      "uu_oidcg01": {
        cdnBaseUri: `${cdnUri}uu-oidcg01/${getPackageJson('uu_oidcg01').version}/`,
        localBaseUri: `node_modules/uu_oidcg01/dist/`
      },
      // "plus4u5g01": {
      //   cdnBaseUri: `${cdnUri}uu-plus4u5g01/0.0.0/`, // plus4u5g01 is currently only on CDN
      //   localBaseUri: `../../../uu_plus4u5g01/dist/`,
      //   main: `plus4u5g01.js`
      // },

    //   // example of all recognized options
    //   "some-lib": {
    //     cdnBaseUri: `${cdnUri}libs/some-lib/${getPackageJson('some-lib').version}/`,
    //     localBaseUri: `node_modules/some-lib/dist/`, // if given and CDN is not used, will be copied to <%outputPath%>/lib/<%depName%>-<%depVersion%>/
    //     main: `some-lib${infix}.js`, // path within baseUri to the main entry file of the dependency
    //
    //     + some SystemJS loader "meta" options - https://github.com/systemjs/systemjs/blob/0.19.47/docs/config-api.md#meta
    //     deps: ["some-other-lib"], // dependencies to load before this module; because most common libraries are AMD-compatible, this usually isn't needed
    //     format: "global",  // in case that the dependency exports its functionalities to a global variable and isn't built with UMD header / for AMD-compatible loader
    //     exports: "SomeLib" // in case that the dependency exports its functionalities to a global variable and isn't built with UMD header / for AMD-compatible loader
    //   }
    }
  };

  // allow project packages (src/<pack>/<pack>.js) to be loaded as external dependency (in separate on-demand HTTP request)
  // when developer uses "import * as Pack from 'app/<pack>'" or "SystemJS.import('app/<pack>').then(function (exports) { ... })"
  // in the source code
  var packages = buildHelpers.getProjectPackageList(config.sourcePath);
  packages.forEach(pack => {
    config.dependencies[pack.moduleName] = {
      baseUri: pack.directory + "/",
      main: pack.name + infix + ".js"
    };
  });

  return config;
};

function getPackageJson(depName) {
  return buildHelpers.getPackageJson(depName);
}
