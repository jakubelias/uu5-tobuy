import React from "react";
import * as UU5 from "uu5g04";

import Cfg from "./_config.js";
import "./demo-left.less";

export const DemoLeft = React.createClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.NestingLevelMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.APP + ".DemoLeft",
    nestingLevel: "boxCollection",
    classNames: {
      main: Cfg.CSS + "-demo-left",
      menu: Cfg.CSS + "-demo-left-menu",
      menuItem: Cfg.CSS + "-demo-left-menu-item",
      aboutAuth: Cfg.CSS + "-about-authors",
      aboutApp: Cfg.CSS + "-about-app"
    },
    lsi: {
      welcome: {
        cs: "Uvítací stránka",
        en: "Welcome page"
      },
      aboutAuth: {
        cs: "O Autorech",
        en: "About Authors"
      },
      aboutApp: {
        cs: "O Aplikaci",
        en: "About Application"
      }
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
  render(){
    return (
      this.getNestingLevel()
        ? (
        <UU5.Bricks.Div {...this.getMainPropsToPass()}>
          <UU5.Bricks.Div className="center">
            <UU5.Bricks.Image
              name="Logo"
              responsive
              src="assets/logo.png"/>
          </UU5.Bricks.Div>
          <UU5.Bricks.Div className={this.getClassName("menu")}>
            <UU5.Bricks.Link className={this.getClassName("menuItem")}>
              <UU5.Bricks.Span
                className="mdi-home"
                style={{fontSize: "20px", lineHeight: "20px", fontFamily: "Material Design Icons"}}
              />
              <UU5.Bricks.Span style={{paddingLeft: "10px", lineHeight: "20px"}}>
                {this.getLSIComponent('welcome')}
              </UU5.Bricks.Span>
            </UU5.Bricks.Link>
          </UU5.Bricks.Div>
          <UU5.Bricks.Div className={this.getClassName("aboutAuth")} content={this.getLSIComponent('aboutAuth')}/>
          <UU5.Bricks.Div className={this.getClassName("aboutApp")} content={this.getLSIComponent('aboutApp')}/>
        </UU5.Bricks.Div>
      ) : null
    );
  }
  //@@viewOff:render
});

export default DemoLeft;

