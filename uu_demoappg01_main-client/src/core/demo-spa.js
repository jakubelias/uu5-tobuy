import React from "react";
import * as UU5 from "uu5g04";
import * as Plus4U5 from "plus4u5g01";
import Cfg from "./_config.js";

import DemoSpaAuthenticated from "./demo-spa-authenticated.js";
import DemoSpaNotAuthenticated from "./demo-spa-not-authenticated.js";

import "./demo-spa.less";

const DemoSpa = React.createClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.NestingLevelMixin,
    UU5.Common.IdentityMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.APP + ".DemoSpa",
    nestingLevel: "spa",
    classNames: {
      main: Cfg.CSS + "-demo-spa clear-sans"
    },
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  getInitialState() {
    UU5.Environment.spa = this;
    return {};
  },
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
      this.getNestingLevel()
        ? (
        <Plus4U5.App.Frame {...this.getMainPropsToPass()}>
          {this.isAuthenticated() && <DemoSpaAuthenticated name="authenticated"/>}
          {this.isNotAuthenticated() && <DemoSpaNotAuthenticated name="notAuthenticated"/>}
          {this.isPending() && <Plus4U5.Bricks.Loading/>}
        </Plus4U5.App.Frame>
      ) : null
    );
  }
  //@@viewOff:render
});

export default DemoSpa;
