import React from "react";
import * as UU5 from "uu5g04";
import * as Plus4U5 from "plus4u5g01";
import {Uri} from "uu_appg01_core";

import Cfg from "./_config.js";
import DemoLeft from "./demo-left.js";
import DemoBottom from "./demo-bottom.js";
import WelcomeRow from "../bricks/welcome-row.js";
import About from "./about.js";
import DemoHome from "./demo-home.js";

import "./demo-spa-authenticated.less";

const DemoSpaAuthenticated = React.createClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.NestingLevelMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.APP + ".DemoSpaAuthenticated",
    nestingLevel: "spa",
    classNames: {
      main: Cfg.CSS + "-demo-spa-authenticated",
      welcomeRow: Cfg.CSS + "-demo-spa-authenticated-welcome-row",
      welcome: Cfg.CSS + "-demo-spa-authenticated-welcome"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  _getLanguageSelector() {
    return <UU5.Bricks.LanguageSelector
      headerMode="code"
      bodyMode="label-code"
      displayedLanguages={["cs", "en"]}
      className="plus4u5-app-page-language-selector"
    />;
  },

  _getRoute() {
    let route = null;
    let uriBuilder = Uri.UriBuilder.parse(window.location.href);
    let uc = uriBuilder.useCase;

    if (uc.match(/^\/?about/)) {
      route = <About/>;
    } else {
      route = <DemoHome/>;
    }
    return route;
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    let routerBasePath = location.pathname.replace(/^(.*)\/.*/, "$1");

    return (
      //          leftWidth="!xs-320px !sm-256px !md-256px lg-256px"
      this.getNestingLevel()
        ? (
        <Plus4U5.App.Page
          {...this.getMainPropsToPass()}
          top={<Plus4U5.App.Top style={{backgroundColor: '#005DA7'}} content={Cfg.LSILABEL_APP_NAME}/>}
          bottom={<DemoBottom/>}
          type={2}
          systemLayerContent={[
            this._getLanguageSelector(),
            <Plus4U5.App.Button/>
          ]}
          left={<DemoLeft/>}
        >
          <UU5.Common.Router
            urlBuilder={Plus4U5.Common.Url}
            route={this._getRoute()}
            basePath={routerBasePath}
          />


        </Plus4U5.App.Page>
      ) : null
    );
  }  //@@viewOff:render
});

export default DemoSpaAuthenticated;

