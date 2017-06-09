//@@viewOn:import
import React from "react";
import * as UU5 from "uu5g04";

import "./user-info.less";
//@@viewOff:import

const UserInfo = React.createClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU.App.UserInfo",
    classNames: {
      main: "uu-app-userinfo",
      image: "uu-app-userinfo-image",
      name: "uu-app-userinfo-name"
    },
    lsi: {
      anonymousName: {
        en: "Anonymous",
        cs: "Nepřihlášen"
      }
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    identityName: React.PropTypes.string,
    image: React.PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  getDefaultProps() {
    return {
      identityName: null,
      image: "./common/img/anonymous.png"
    };
  },
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
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <UU5.Bricks.Image
          className={this.getClassName("image")}
          src={this.props.image}
          type="circle"
        />

        <UU5.Bricks.Span className={this.getClassName("name")}>
          {this.props.identityName}
        </UU5.Bricks.Span>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default UserInfo;
