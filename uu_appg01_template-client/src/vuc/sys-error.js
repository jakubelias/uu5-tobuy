import React from "react";
import * as UU5 from 'uu5g04';

import "./sys-error.less";

const SysError = React.createClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.VucMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: 'UU.App.SysError',
    vucName: 'sysËrror',
    vucTitle: '404',
    classNames: {
      main: 'uu-app-vucsyserror',
      wrapper: 'uu-app-vucsyserror-wrapper',
      header: 'uu-app-vucsyserror-header',
      info: 'uu-app-vucsyserror-info',
      infoText: 'uu-app-vucsyserror-info-text',
      linkMore: 'uu-app-vucsyserror-link-more',
      contact: 'uu-app-vucsyserror-contact',
      contactImg: 'uu-app-vucsyserror-contact-img uu5-common-font-size-xxl',
      contactTitle: 'uu-app-vucsyserror-contact-title',
      contactPhone: 'uu-app-vucsyserror-contact-phone',
      hand: 'uu-app-vucsyserror-hand uu5-common-font-size-xxl'
    },
    sysErrorData: {
      header: {
        "cs": "Nedostatečná oprávnění",
        "en-gb": "Lorem Ipsum",
        "en-us": "",
        "sk": "Lorem Ipsum",
        "ua": "Lorem Ipsum"
      },
      infoText: {
        "cs": "Omlouváme se, ale na požadovanou stránku nemáte nyní přístup. Pokud si myslíte, že byste na stránku přístup měli mít, kontaktujte svého správce systému, nebo centrální HelpDesk",
        "en-gb": "Lorem Ipsum",
        "en-us": "",
        "sk": "Lorem Ipsum",
        "ua": "Lorem Ipsum"
      },
      linkMore: {
        "cs": "Dozvědět se více",
        "en-gb": "Lorem Ipsum",
        "en-us": "",
        "sk": "Lorem Ipsum",
        "ua": "Lorem Ipsum"
      },
      contactData: {
        title: {
          "cs": "Centrální Helpdesk",
          "en-gb": "Lorem Ipsum",
          "en-us": "",
          "sk": "Lorem Ipsum",
          "ua": "Lorem Ipsum"
        },
        phone: {
          "cs": "+420 221 400 400",
          "en-gb": "Lorem Ipsum",
          "en-us": "",
          "sk": "Lorem Ipsum",
          "ua": "Lorem Ipsum"
        },
      },
    },
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
  render() {
    return (
      <UU5.Layout.Root>
        <UU5.Layout.Container className={this.getClassName().wrapper}>

          <UU5.Bricks.Badge className={this.getClassName().hand}>
            <UU5.Bricks.Glyphicon glyphicon='glyphicon glyphicon-remove' />
          </UU5.Bricks.Badge>

          <UU5.Bricks.Section
            header={
              <UU5.Bricks.Lsi
                className={this.getClassName().header}
                lsi={this.constructor.sysErrorData.header}
              />
            }
          >
            <UU5.Bricks.Div className={this.getClassName().info}>
              <UU5.Bricks.P>
                <UU5.Bricks.Lsi className={this.getClassName().infoText} lsi={this.constructor.sysErrorData.infoText} />
              </UU5.Bricks.P>

              <UU5.Bricks.Link href="https://unicorn.com/" target='_top'>
                <UU5.Bricks.Lsi className={this.getClassName().linkMore} lsi={this.constructor.sysErrorData.linkMore} />
              </UU5.Bricks.Link>
            </UU5.Bricks.Div>

            <UU5.Bricks.Div className={this.getClassName().contact}>
              <UU5.Bricks.Glyphicon
                glyphicon='glyphicon glyphicon-earphone'
                className={this.getClassName().contactImg}
              />

              <UU5.Bricks.P>
                <UU5.Bricks.Lsi
                  className={this.getClassName().contactTitle}
                  lsi={this.constructor.sysErrorData.contactData.title}
                />
              </UU5.Bricks.P>

              <UU5.Bricks.P>
                <UU5.Bricks.Lsi
                  className={this.getClassName().contactPhone}
                  lsi={this.constructor.sysErrorData.contactData.phone}
                />
              </UU5.Bricks.P>
            </UU5.Bricks.Div>
          </UU5.Bricks.Section>
        </UU5.Layout.Container>
      </UU5.Layout.Root>
    );
  }
  //@@viewOff:render
});

export default SysError;
