import React from "react";
import * as UU5 from "uu5g04";
import * as Plus4U5 from "plus4u5g01";

import Cfg from "./_config.js";

import "./demo-content-ready.less";

import DemoRouteDefault from "./demo-route-default.js";
import DemoRouteOther from "./demo-route-other.js";
import DemoRouteParams from "./demo-route-params.js";

export const DemoContentReady = React.createClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.NestingLevelMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.APP + ".DemoContentReady",
    nestingLevel: "page",
    classNames: {
      main: Cfg.CSS + "-demo-content-ready",
      content: Cfg.CSS + "-demo-content-ready-content"
    },
    defaults: {},
    opt: {
      nestingLevelWrapper: true
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    bookData: React.PropTypes.object,
    page: React.PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  componentWillMount() {
    this._changeTitle();
    UU5.Environment.EventListener.registerLsi(this.getId(), this._changeTitle);
  },

  componentWillUnmount() {
    UU5.Environment.EventListener.unregisterLsi(this.getId());
  },
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  _changeTitle() {
    this.props.data.title && (document.title = this.getLSIItem(this.props.data.title));
  },

  _getLanguageSelector(){
    return <UU5.Bricks.LanguageSelector
      headerMode="code"
      bodyMode="label-code"
      displayedLanguages={this.props.data.languages}
      className="plus4u5-app-page-language-selector"
    />;
  },

  _getRouteWithParams() {
    let param1 = UU5.Common.Tools.decodeQuery(window.location.search).param1;
    let param2 = UU5.Common.Tools.decodeQuery(window.location.search).param2;

    return <DemoRouteParams param1={param1} param2={param2} {...this.getMainPropsToPass()}/>;
  },


  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    let routerBasePath = location.pathname.replace(/(\/.*?\/.*?)\/.*/, "$1");
    console.log(routerBasePath);
    return (
      this.getNestingLevel()
        ? (
        <Plus4U5.App.Page
          {...this.getMainPropsToPass()}
          type="1"
          flex
          top={<Plus4U5.App.Top content={this.props.data.name}/>}
          contentProps={{className: this.getClassName("content")}}
          systemLayerContent={[this._getLanguageSelector(), <Plus4U5.App.SearchButton disabled/>,
            <Plus4U5.App.Button/>]}
          left={<UU5.Bricks.Span/>}
          right={<UU5.Bricks.Span/>}
          leftWidth="xs-0 sx-0 md-0 lg-0"
          rightWidth="xs-0 sx-0 md-0 lg-0"
        >
          <UU5.Common.Router
            urlBuilder={Plus4U5.Common.Url}
            route="/"
            routes={{
              "/": {component: <DemoRouteDefault name={this.props.data.name} description={this.props.data.description}/>},
              "/uve/withParams": {component: this._getRouteWithParams()},
              "/other": {component: <DemoRouteOther/>}
            }}
            notFoundRoute={<DemoRouteDefault name={this.props.data.name} description={this.props.data.description}/>}
            basePath={routerBasePath}
          />

        </Plus4U5.App.Page>
      ) : null
    );
  }
  //@@viewOff:render
});

export default DemoContentReady;

