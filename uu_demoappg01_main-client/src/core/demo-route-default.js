import React from "react";
import * as UU5 from "uu5g04";

import Cfg from "./_config.js";

import "./demo-route-default.less";

import DemoRouteParams from "./demo-route-params.js";

const DemoRouteDefault = React.createClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.NestingLevelMixin,
    UU5.Common.CcrReaderMixin,
    UU5.Common.RouteMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.APP + ".DemoRouteDefault",
    nestingLevel: 'bigBoxCollection',
    classNames: {
      main: Cfg.CSS + "-demo-route-default"
    },
    defaults: {}
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    name: React.PropTypes.string,
    description: React.PropTypes.string
  },
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
  _navigateWithParams() {
    let params = {param1: "first", param2: "second"};
    this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER) && this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(
      <DemoRouteParams {...params}/>,
      {url: {useCase: "withParams", parameters: params}});
  },

  _navigateOther(){
    this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER) && this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute("/other");
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    return (
      this.getNestingLevel()
        ? (
        <UU5.Bricks.Section header={this.props.name} {...this.getMainPropsToPass()}>
          <UU5.Bricks.Div content={this.props.description}/>
          <UU5.Bricks.Section header={this.getLSIItem(Cfg.LSIROUTING_HEADER)}>
            <UU5.Bricks.TouchIcon content={this.getLSIItem(Cfg.LSIWITH_PARAM)} onClick={this._navigateWithParams}/>
            <UU5.Bricks.TouchIcon content={this.getLSIItem(Cfg.LSIOTHER)} onClick={this._navigateOther}/>
          </UU5.Bricks.Section>
        </UU5.Bricks.Section>
      ) : null
    );
  }
  //@@viewOff:render
});

export default DemoRouteDefault;

