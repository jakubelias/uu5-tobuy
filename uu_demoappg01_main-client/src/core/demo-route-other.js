import React from "react";
import * as UU5 from "uu5g04";

import Cfg from "./_config.js";

import "./demo-route-other.less";

const DemoRouteOther = React.createClass({

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
    tagName: Cfg.APP + ".DemoRouteOther",
    nestingLevel: 'bigBoxCollection',
    classNames: {
      main: Cfg.CSS + "-demo-route-other"
    },
    defaults: {}
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    title: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.string]),
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
  _navigateHome() {
    this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER) && this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute("/home");
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    return (
      this.getNestingLevel()
        ? (
        <UU5.Bricks.Section header={this.getLSIItem({"cs": "Jiné url", "en": "Different url"})} {...this.getMainPropsToPass()}>
          <UU5.Bricks.Lsi>
            <UU5.Bricks.Lsi.Item language="en">
              <UU5.Bricks.P>
                This component is shown when <i>/other</i> is part of url.
              </UU5.Bricks.P>
            </UU5.Bricks.Lsi.Item>
            <UU5.Bricks.Lsi.Item language="cs">
              <UU5.Bricks.P>
                This is the component that will be displayed when <i>/other</i> is used in the url.
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

export default DemoRouteOther;

