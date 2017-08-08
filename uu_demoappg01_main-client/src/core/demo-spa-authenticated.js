import React from "react";
import * as UU5 from "uu5g04";

import Cfg from "./_config.js";

import Calls from "calls";

import "./demo-spa-authenticated.less";

import DemoContentLoading from "./demo-content-loading.js"
import DemoContentError from "./demo-content-error.js"
import DemoContentReady from "./demo-content-ready.js"

const DemoSpaAuthenticated = React.createClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.NestingLevelMixin,
    UU5.Common.LoadMixin,
    UU5.Common.CcrWriterMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.APP + ".DemoSpaAuthenticated",
    nestingLevel: "page",
    classNames: {
      main: Cfg.CSS + "-demo-spa-authenticated"
    },
    opt: {
      nestingLevelWrapper: true,
      ccrKey: Cfg.CCRKEY_SPA_AUTHENTICATED
    },
    calls: {
      onLoad: "loadDemoContent",
    },
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  componentWillMount() {
    this.setCalls(Calls);
  },
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  _getChild() {
    let child;
    switch (this.getLoadFeedback()) {
      case "loading":
        child = <DemoContentLoading {...this.getMainPropsToPass()} />;
        break;
      case "ready":{
        child = <DemoContentReady data={this.getDtoOut()} {...this.getMainPropsToPass()} />;
        break;
      }
      default:
        child = <DemoContentError errorData={this.getErrorData()} {...this.getMainPropsToPass()}/>;
    }
    return (child)
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    return (
      this.getNestingLevel()
        ? this._getChild()
        : null
    );
  }
  //@@viewOff:render
});

export default DemoSpaAuthenticated;

