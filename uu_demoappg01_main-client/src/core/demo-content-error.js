import React from "react";
import * as UU5 from "uu5g04";
import * as Plus4U5 from "plus4u5g01";

import Cfg from './_config.js';

import './demo-content-error.less';

export const DemoContentError = React.createClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.NestingLevelMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.APP + '.DemoContentError',
    nestingLevel: "page",
    classNames: {
      main: Cfg.CSS + '-demo-content-error'
    },
    opt: {
      nestingLevelWrapper: true
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    errorData: React.PropTypes.object
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  getDefaultProps() {
    return {
      errorData: null
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
      this.getNestingLevel()
        ? (
        <Plus4U5.App.Page
          {...this.getMainPropsToPass()}
          top={<Plus4U5.App.Top content={Cfg.LSILABEL_APP_NAME}/>}
          flex
          type={1}
          content={[
            Cfg.CONTENT_DEMO_CONTENT_ERROR,
            <UU5.Bricks.Error><UU5.Bricks.Pre>{JSON.stringify(this.props.errorData, null, 2)}</UU5.Bricks.Pre></UU5.Bricks.Error>
          ]}
          left={<UU5.Bricks.Span/>}
          right={<UU5.Bricks.Span/>}
          leftWidth="xs-0 sx-0 md-0 lg-0"
          rightWidth="xs-0 sx-0 md-0 lg-0"
        />
      ) : null
    );
  }
  //@@viewOff:render
});

export default DemoContentError;

