//@@viewOn:import
import React from "react";
import * as UU5 from 'uu5g04';

import UnderConstruction from "../common/under-construction.js";

import "./home.less";
//@@viewOff:import

let Home = React.createClass({
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
    vucName: 'home',
    classNames: {
      main: 'uu-app-vuchome'
    },
    vucTitle: { en: "Home", cs: "Úvod" }
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
        {
          this.getVucChildren(() => {
            return <UnderConstruction {...this.getMainPropsToPass()} />
          })
        }
      </UU5.Layout.Root>
    )
  }
  //@@viewOff:render
});

export default Home;
