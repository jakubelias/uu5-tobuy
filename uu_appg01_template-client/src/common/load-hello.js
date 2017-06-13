import React from "react";
import * as UU5 from "uu5g04";
import "./load-hello.less"

import "./uve.less";

const LoadHello = React.createClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.LoadMixin,
    UU5.Layout.ContainerMixin
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

  getDefaultProps() {
    return {
      helloTextLsi: {en: "Java server said hello at:", cs: "Java server řekl ahoj v čase:"},
    };
  },

  //@@viewOn:render
  render() {
    return (
      <UU5.Layout.Container {...this.getMainPropsToPass()}>
        {this.getLoadFeedbackChildren((data) => {
            return (
              <UU5.Bricks.Div className={this.getClassName().main}>
                <UU5.Bricks.Lsi lsi={this.props.helloTextLsi} />
                <UU5.Bricks.P>
                  {data.data}
                </UU5.Bricks.P>
              </UU5.Bricks.Div>
            )
          }
        )}
      </UU5.Layout.Container>
    );
  }
  //@@viewOff:render
});

export default LoadHello;
