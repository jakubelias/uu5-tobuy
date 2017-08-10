import React from "react";
import * as UU5 from "uu5g04";
import * as Plus4U5 from "plus4u5g01";

import Cfg from "./_config.js";

import "./demo-spa-not-authenticated.less";

const DemoSpaNotAuthenticated = React.createClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.NestingLevelMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.APP + ".DemoSpaNotAuthenticated",
    nestingLevelList: UU5.Environment.getNestingLevelList("page","inline"),
    classNames: {
      main: Cfg.CSS +  "-demo-spa-not-authenticated"
    },
    defaults: {
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
  _getLanguageSelector(){
    return <UU5.Bricks.LanguageSelector
      headerMode="code"
      bodyMode="label-code"
      displayedLanguages={["cs", "en"]}
      className="plus4u5-app-page-language-selector"
    />;
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    return (
      this.getNestingLevel() === "page"
        ? (
        <Plus4U5.App.Page
          {...this.getMainPropsToPass()}
          top={<Plus4U5.App.Top content={Cfg.LSILABEL_APP_NAME}/>}
          flex
          type={1}
          content={Cfg.CONTENT_UUDEMO}
          systemLayerContent={[this._getLanguageSelector(), <Plus4U5.App.SearchButton disabled/>, <Plus4U5.App.Button/>]}
          left={<UU5.Bricks.Span/>}
          right={<UU5.Bricks.Span/>}
          leftWidth="xs-0 sx-0 md-0 lg-0"
          rightWidth="xs-0 sx-0 md-0 lg-0"
        >
        </Plus4U5.App.Page>
      ) : null
    );
  }
  //@@viewOff:render
});

export default DemoSpaNotAuthenticated;

