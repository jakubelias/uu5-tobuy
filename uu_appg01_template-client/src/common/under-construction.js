import React from "react";
import * as UU5 from 'uu5g04';

import "./under-construction.less";

export default React.createClass(
  {
    //@@viewOn:mixins
    mixins: [
      UU5.Common.BaseMixin,
      UU5.Common.ElementaryMixin,
      UU5.Layout.ContainerMixin
    ],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics: {
      tagName: 'UU.App.UnderConstruction',
      classNames: {
        main: 'uu-app-under-construction-component',
        description: 'uu-app-under-construction-component-description',
        constructionText: 'uu-app-under-construction-component-construction-text'
      },
      defaults: {
        closedIcon: 'glyphicon-wrench'
      }
    },
    //@@viewOff:statics

    //@@viewOn:propTypes
    propTypes: {
      constructionTextLsi: React.PropTypes.any,
      descriptionTextLsi: React.PropTypes.any
    },
    //@@viewOff:propTypes

    //@@viewOn:getDefaultProps
    getDefaultProps() {
      return {
        constructionTextLsi: { en: "Application is under construction.", cs: "Aplikace je rozpracována." },
        descriptionTextLsi: null
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
        <UU5.Layout.Container {...this.getMainPropsToPass()}>
          <UU5.Bricks.Div className={this.getClassName().main}>
            <UU5.Bricks.P className={this.getClassName().description}>
              <UU5.Bricks.Lsi lsi={this.props.descriptionTextLsi} />
            </UU5.Bricks.P>
            <UU5.Bricks.P className={this.getClassName().constructionText}>
              <UU5.Bricks.Lsi lsi={this.props.constructionTextLsi} />
            </UU5.Bricks.P>
            <UU5.Bricks.Glyphicon glyphicon={this.getDefault().closedIcon} />
          </UU5.Bricks.Div>
        </UU5.Layout.Container>
      );
    }
    //@@viewOff:render
  }
);
