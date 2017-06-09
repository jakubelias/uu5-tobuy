//@@viewOn:import
import React from "react";
import * as UU5 from "uu5g04";
import LoadHello from "../common/load-hello.js"
import Calls from "../calls"

import "./home.less";
//@@viewOff:import

let Hello = React.createClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.CcrReaderMixin,
    UU5.Common.VucMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: 'UU.App.VucHome',
    vucName: 'hello',
    classNames: {
      main: 'uu-app-vuchello'
    },
    vucTitle: {en: "Hello", cs: "Ahoj"}
  },
  //@@viewOff:statics

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  componentDidUpdate() {
    this.getCcrComponentByKey('UU.App.Menu').setProfileCodes(this.getProfiles());
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

      <UU5.Layout.Root>
        <LoadHello calls={Calls}/>
      </UU5.Layout.Root>
    )
  }
  //@@viewOff:render
});

export default Hello;
