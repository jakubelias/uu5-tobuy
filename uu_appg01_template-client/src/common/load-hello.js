import React from "react";
import * as UU5 from 'uu5g04';

import "./uve.less";

const LoadHello = React.createClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.LoadMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: 'UU.App.LoadHello',
    classNames: {
      main: 'uu-app-load-hello'
    },
    calls: {
      onLoad: 'loadHello',
    }
  },
  //@@viewOn:render
  render() {
    return (
      <UU5.Layout.Flc {...this.getMainPropsToPass()}>
        {this.getLoadFeedbackChildren((data) => {
            return (
              <UU5.Bricks.Div> {data.data}</UU5.Bricks.Div>
            )
          }
        )}
      </UU5.Layout.Flc>
    );
  }
  //@@viewOff:render
});

export default LoadHello;
