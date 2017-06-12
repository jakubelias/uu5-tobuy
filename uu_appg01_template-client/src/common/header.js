//@@viewOn:import
import React from "react";
import * as UU5 from "uu5g04";
import Menu from "./menu.js";

import "./header.less";
//@@viewOff:import

const languages = ["cs", "en-gb", "en-us", "sk", "ua"];

const Header = React.createClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.ScreenSizeMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU.App.Header",
    classNames: {
      main: "uu-app-header uu5-common-bg",
      body: "uu-app-header-body",
      languageSelector: "uu-app-header-ls"
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
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    return (
      <header {...this.buildMainAttrs()}>
        <Menu ccrKey="UU.App.Menu" />

        <UU5.Bricks.LanguageSelector
          className={this.getClassName("languageSelector")}
          displayedLanguages={languages}
          headerMode="flag"
        />

        {this.getDisabledCover()}
      </header>
    );
  }
  //@@viewOff:render
});

export default Header;
