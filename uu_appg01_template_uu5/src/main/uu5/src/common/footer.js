//@@viewOn:import
import React from "react";
import * as UU5 from "uu5g04";

import "./footer.less";
//@@viewOff:import

const Footer = React.createClass({

    //@@viewOn:mixins
    mixins: [
      UU5.Common.BaseMixin,
      UU5.Common.ElementaryMixin
    ],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics: {
      tagName: "UU.App.Footer",
      classNames: {
        main: "uu-app-footer"
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
        <UU5.Bricks.Footer {...this.getMainPropsToPass()}>
          Copyright © {new Date().getFullYear()} Plus4U
        </UU5.Bricks.Footer>
      );
    }
    //@@viewOff:render

  }
);

export default Footer;
