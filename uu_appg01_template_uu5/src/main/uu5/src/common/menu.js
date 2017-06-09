//@@viewOn:import
import React from "react";
import * as UU5 from "uu5g04";
import UserInfo from "./user-info.js";

import "./menu.less";
//@@viewOff:import

const menuItems = [
  {
    nameLSI: { "cs": "Úvod", "en": "Home", "sk": "Home", "ua": "Home" },
    iconClass: "glyphicon-home",
    profileCodes: null,
    route: "/home"
  },
  {
    nameLSI: { "cs": "O aplikaci", "en": "About", "sk": "O aplikácii", "ua": "про" },
    iconClass: "glyphicon-info-sign",
    profileCodes: null,
    route: "/sysAbout"
  }
];

const Menu = React.createClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.ScreenSizeMixin,
    UU5.Common.CcrWriterMixin,
    UU5.Common.IdentityMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU.App.Menu",
    classNames: {
      main: "uu-app-menu",
      body: "uu-app-menu-content",
      close: "uu-app-menu-close",
      login: "uu-app-menu-login",
      logout: "uu-app-menu-logout",
      wide: "uu-app-menu-wide",
      opened: "uu-app-menu-opened"
    },
    lsi: {
      menu: { "cs": "Menu", "en": "Menu", "sk": "Menu", "ua": "меню" },
      logout: { "cs": "Odhlásit", "en-gb": "Log out", "en-us": "Log f*ckin' out", "sk": "Odhlásiť", "ua": "вийти" },
      login: {
        "cs": "Přihlásit",
        "en-gb": "Log in",
        "en-us": "Log in",
        "sk": "Prihlásiť",
        "ua": "зареєструватися"
      }
    },
    defaults: {
      glyphiconMenu: "uu-glyphicon-menu",
      glyphiconClose: "uu-glyphicon-cross"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  getInitialState() {
    return {
      opened: false,
      profileCodes: []
    };
  },
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  setProfileCodes(profileCodes) {
    if (profileCodes || !this.state.profileCodes || !this.state.profileCodes.length) {
      this.setState({ profileCodes: profileCodes });
    }
  },
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  _onMenuItemClick(item) {
    this.setState({ opened: false }, () => this.setRoute(item.route));
  },

  _onMenuToggle() {
    this.setState((prevState) => ({ opened: !prevState.opened }));
  },

  _onCloseClick() {
    this.setState({ opened: false });
  },

  _onLoginClick() {
    this.login();
  },

  _onLogoutClick() {
    this.logout();
  },

  _eachItem(item) {
    let hide = item.profileCodes && !item.profileCodes.some(
        itemProfileCode => this.state.profileCodes.indexOf(itemProfileCode) != -1
      );

    if (hide) {
      return null;
    }

    return (
      <UU5.Bricks.Li key={item.route}>
        <UU5.Bricks.Link onClick={this._onMenuItemClick.bind(this, item)}>
          <UU5.Bricks.Glyphicon glyphicon={item.iconClass} />
          <UU5.Bricks.Lsi lsi={item.nameLSI} />
        </UU5.Bricks.Link>
      </UU5.Bricks.Li>
    );
  },

  _getImageUrl() {
    let url;

    // check whether we're authenticated andwhether we're able to get the picture
    if (this.isAuthenticated() && this.getSession()) {
      let claims = this.getSession().getClaims();

      if (claims && claims["sub"]) {
        url = this.getSession().serverUri + "/getIdentityPicture?id=" + encodeURIComponent(claims["sub"]);
      }
    }

    return url;
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    let mainAttrs = this.getMainPropsToPass();
    if (this.state.opened) {
      mainAttrs.className += " " + this.getClassName("opened");
    }

    if (!this.isXs()) {
      mainAttrs.className += " " + this.getClassName("wide");
    }

    return (
      <UU5.Bricks.Div {...mainAttrs}>
        <UU5.Bricks.Link onClick={this._onMenuToggle}>
          <UU5.Bricks.Glyphicon glyphicon={this.getDefault("glyphiconMenu")} />
        </UU5.Bricks.Link>

        { this.isXs()
          ? null
          : <UU5.Bricks.Text content={this.getLSIValue("menu")} className={this.getClassName("menuTitle")} />
        }

        <UU5.Bricks.Div className={this.getClassName("body")}>
          <UU5.Bricks.Link onClick={this._onCloseClick} className={this.getClassName("close")}>
            <UU5.Bricks.Glyphicon glyphicon={this.getDefault("glyphiconClose")} />
          </UU5.Bricks.Link>

          <UserInfo image={this._getImageUrl()} identityName={this.getIdentity() ? this.getIdentity().name : null} />

          <UU5.Bricks.Ul>
            {menuItems.map(it => this._eachItem(it))}
          </UU5.Bricks.Ul>

          { this.isAuthenticated()
            ?
            <UU5.Bricks.Link onClick={this._onLogoutClick} className={this.getClassName("logout")} key="logout">
              {this.getLSIComponent("logout")}
            </UU5.Bricks.Link>
            :
            <UU5.Bricks.Link onClick={this._onLoginClick} className={this.getClassName("login")} key="login">
              {this.getLSIComponent("login")}
            </UU5.Bricks.Link>
          }
        </UU5.Bricks.Div>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Menu;
