import React from "react";
import * as UU5 from 'uu5g04';
import Header from "../common/header.js";
import Footer from "../common/footer.js";
import Home from "../vuc/home.js"
import SysAbout from "../vuc/sys-about.js"
import SysError from "../vuc/sys-error.js"
import Hello from "../vuc/hello.js"

import "./uve.less";

const Uve = React.createClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: 'UU.App.Uve',
    classNames: {
      main: 'uu-app-uve'
    }
  },
  //@@viewOff:statics

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  _getAppBasePath() {
    return (
      document.querySelector("base") && document.querySelector("base").getAttribute("data-uu-app-base")) ||
      location.pathname.replace(/^(.*\/).*/, "$1");
    // console.log(document.querySelector("base"))
    // return location.pathname.replace(/^(.*\/).*/, "$1");
  },

  _getRoutes() {
    return {
      "/": { component: <Home /> },
      "/public": { component: <Hello /> },
      "/home": { component: <Home /> },
      "/sysAbout": { component: <SysAbout authorized={false} /> },
      "/hello": { component: <Hello /> }
    };
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    // define routes
    let appBasePath = this._getAppBasePath();
    let routerBasePath = appBasePath.replace(/\/$/, ""); // trim slash at the end

    return (
      <UU5.Layout.Page
        type="1"
        top={<Header colorSchema="primary" />}
        bottom={<Footer />}
      >
        <UU5.Common.Router
          basePath={routerBasePath}
          routes={this._getRoutes()}
          route="/"
          notFoundRoute={<SysError authorized={false} />}
        />
      </UU5.Layout.Page>
    );
  }
  //@@viewOff:render
});

export default Uve;
