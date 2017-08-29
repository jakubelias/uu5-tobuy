import React from "react";
import * as UU5 from "uu5g04";
import * as Plus4U5 from "plus4u5g01";

import Cfg from "./_config.js";
import DemoLeft from "./demo-left.js";
import DemoBottom from "./demo-bottom.js";
import WelcomeRow from "../bricks/welcome-row.js";

import "./demo-spa-authenticated.less";

const DemoSpaAuthenticated = React.createClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.NestingLevelMixin,
    UU5.Common.CcrReaderMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.APP + ".DemoSpaAuthenticated",
    nestingLevel: "spa",
    classNames: {
      main: Cfg.CSS + "-demo-spa-authenticated"
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
    let identity = this.getCcrComponentByKey(Cfg.CCRKEY_SPA_AUTHENTICATED).getIdentity();
    return (
      //          leftWidth="!xs-320px !sm-256px !md-256px lg-256px"
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
              <UU5.Bricks.Div className="center" style={{maxWidth: "620px", margin: "0 auto"}}>
                <UU5.Bricks.Column colWidth="xs-12 sm-12 md-3 lg-3">
                  <Plus4U5.Bricks.UserPhoto/>
                </UU5.Bricks.Column>
                <UU5.Bricks.Column colWidth="xs-12 sm-12 md-9 lg-9">
                  <UU5.Bricks.Header
                    className="left"
                    style={{marginTop: "10px", fontSize: "30px"}}
                    level="2"
                    content="Vítejte!"
                  />
                  <UU5.Bricks.Header
                    className="left"
                    style={{marginTop: "10px", paddingBottom: "45px", fontSize: "30px"}}
                    level="2"
                    content={identity.name}
                  />
                </UU5.Bricks.Column>
              </UU5.Bricks.Div>
            </UU5.Bricks.Row>
            <WelcomeRow textPadding="6px" glyphicon="mdi-human-greeting">
              {Cfg.LSILABEL_INTRO_AUTH}
            </WelcomeRow>
            <WelcomeRow textPadding="10px" glyphicon="mdi-monitor">
              {Cfg.LSILABEL_CLIENT_AUTH}
            </WelcomeRow>
            <WelcomeRow textPadding="10px" glyphicon="mdi-server">
              {Cfg.LSILABEL_SERVER_AUTH}
            </WelcomeRow>
          </UU5.Bricks.Div>
        </Plus4U5.App.Page>
      ) : null
    );
  }  //@@viewOff:render
});

export default DemoSpaAuthenticated;

