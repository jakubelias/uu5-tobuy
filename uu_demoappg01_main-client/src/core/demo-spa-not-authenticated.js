import React from "react";
import * as UU5 from "uu5g04";
import * as Plus4U5 from "plus4u5g01";

import Cfg from "./_config.js";

import "./demo-spa-not-authenticated.less";
import DemoLeft from "./demo-left.js";
import DemoBottom from "./demo-bottom.js";
import WelcomeRow from "../bricks/welcome-row.js";

const DemoSpaNotAuthenticated = React.createClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.NestingLevelMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.APP + ".DemoSpaNotAuthenticated",
    nestingLevel: "spa",
    classNames: {
      main: Cfg.CSS + "-demo-spa-not-authenticated"
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
  _getLanguageSelector() {
    return <UU5.Bricks.LanguageSelector
      headerMode="code"
      bodyMode="label-code"
      displayedLanguages={["cs", "en"]}
      className="plus4u5-app-page-language-selector"
    />;
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    return (
      // leftWidth="!xs-320px !sm-256px !md-256px lg-256px"
      this.getNestingLevel()
        ? (
        <Plus4U5.App.Page
          {...this.getMainPropsToPass()}
          top={<Plus4U5.App.Top style={{backgroundColor: '#005DA7'}} content={Cfg.LSILABEL_APP_NAME}/>}
          bottom={<DemoBottom/>}
          type={2}
          systemLayerContent={[
            this._getLanguageSelector(),
            <Plus4U5.App.SearchButton disabled/>,
            <Plus4U5.App.Button/>
          ]}
          left={<DemoLeft/>}
        >
          <UU5.Bricks.Div>
            <UU5.Bricks.Row className="center" style={{padding: "60px 0px 0px 20px"}}>
              <UU5.Bricks.Header
                style={{paddingBottom: "45px", fontSize: "30px"}}
                level="2"
                content={Cfg.LSILABEL_WELCOME}
              />
            </UU5.Bricks.Row>
            <WelcomeRow textPadding="6px" glyphicon="mdi-human-greeting">
              {Cfg.LSILABEL_INTRO}
            </WelcomeRow>
            <WelcomeRow textPadding="10px" glyphicon="mdi-monitor">
              {Cfg.LSILABEL_CLIENT}
            </WelcomeRow>
            <WelcomeRow textPadding="10px" glyphicon="mdi-server">
              {Cfg.LSILABEL_SERVER}
            </WelcomeRow>
            <WelcomeRow style={{backgroundColor: "rgba(0,93,167,0.11)"}} textPadding="20px" glyphicon="mdi-account-key">
              <UU5.Bricks.Span key="loginText" style={{fontSize: "18px", paddingRight: "10px"}}>
                {Cfg.LSILABEL_LOGIN}
              </UU5.Bricks.Span>
              <Plus4U5.App.LoginButton key="loginButton" style={{
                width: "130px",
                height: "32px",
                borderRadius: "2px",
                backgroundColor: "#005DA7",
                color: "white"
              }}/>
            </WelcomeRow>
          </UU5.Bricks.Div>
        </Plus4U5.App.Page>
      ) : null
    );
  }
  //@@viewOff:render
});

export default DemoSpaNotAuthenticated;

