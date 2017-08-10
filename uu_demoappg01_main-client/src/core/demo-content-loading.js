import React from "react";
import * as UU5 from "uu5g04";
import * as Plus4U5 from "plus4u5g01";

import Cfg from "./_config.js";
import "./demo-content-loading.less";

const DemoContentLoading = React.createClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.NestingLevelMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.APP + ".DemoContentLoading",
    nestingLevelList: UU5.Environment.getNestingLevelList("page","inline"),
    classNames: {
      main: Cfg.CSS + "-demo-content-loading",
      content: Cfg.CSS + "-demo-content-loading-content"
    },
    opt: {
      nestingLevelWrapper: true
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
  render(){
    return (
      this.getNestingLevel() === "page"
        ? (
        <Plus4U5.App.Page
          top={<Plus4U5.App.Top content={Cfg.LSILABEL_APP_NAME}/>}
          flex
          type={1}
          className={this.getClassName("content")}
          content={Cfg.CONTENT_DEMO_CONTENT_LOADING}
          left={<UU5.Bricks.Span/>}
          right={<UU5.Bricks.Span/>}
          leftWidth="xs-0 sx-0 md-0 lg-0"
          rightWidth="xs-0 sx-0 md-0 lg-0"
        />
      ) : null
    );
  }
  //@@viewOff:render
});

export default DemoContentLoading;

