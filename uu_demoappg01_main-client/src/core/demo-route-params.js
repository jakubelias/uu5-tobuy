import React from "react";
import * as UU5 from "uu5g04";

import Cfg from "./_config.js";

import "./demo-route-params.less";

const DemoRouteParams = React.createClass({

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
    tagName: Cfg.APP + ".DemoRouteParams",
    nestingLevel: 'bigBoxCollection',
    classNames: {
      main: Cfg.CSS + "-demo-route-params"
    },
    defaults: {}
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    param1: React.PropTypes.string,
    param2: React.PropTypes.string
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
  _navigateHome() {
    this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER) && this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute("/home");
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    return (
      this.getNestingLevel()
        ? (
        <UU5.Bricks.Section header={this.getLSIItem({"cs": "Použité parametry", "en": "Used parameters"})} {...this.getMainPropsToPass()}>
          <UU5.Bricks.Lsi>
            <UU5.Bricks.Lsi.Item language="cs">
              <UU5.Bricks.P>
                Toto je komponeta, která používá parametry param1 '{this.props.param1}' a param2 '{this.props.param2}' z url.
              </UU5.Bricks.P>
            </UU5.Bricks.Lsi.Item>
            <UU5.Bricks.Lsi.Item language="en">
              <UU5.Bricks.P>
                This component is using parameters param1 '{this.props.param1}' and param2 '{this.props.param2}' from url.
              </UU5.Bricks.P>
            </UU5.Bricks.Lsi.Item>
          </UU5.Bricks.Lsi>
          <UU5.Bricks.Section header={this.getLSIItem(Cfg.LSIROUTING_HEADER)}>
            <UU5.Bricks.TouchIcon content={this.getLSIItem(Cfg.LSIHOME)} onClick={this._navigateHome}/>
          </UU5.Bricks.Section>
        </UU5.Bricks.Section>
      ) : null
    );
  }
  //@@viewOff:render
});

export default DemoRouteParams;

