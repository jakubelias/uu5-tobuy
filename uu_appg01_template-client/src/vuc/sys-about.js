//@@viewOn:import
import React from "react";
import * as UU5 from "uu5g04";
import SysAboutData from "./sys-about-data.js";

import "./sys-about.less";
//@@viewOff:import

const SysAbout = React.createClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.VucMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU.App.SysAbout",
    vucName: "sysAbout",
    vucTitle: { en: "About Us", cs: "O nás" },
    classNames: {
      main: "uu-app-sysabout",
      about: "uu-app-about-about",
      header: "uu-app-about-header",
      text: "uu-app-about-text",
      references: "uu-app-about-references",
      reference: 'uu-app-references-reference',
      referenceLink: 'uu-app-references-link',
      referenceText: 'uu-app-references-text',
      creators: "uu-app-about-creators",
      leadingCreator: 'uu-app-creators-leading_creator',
      leadingImage: 'uu-app-creators-leading_img',
      leadingName: 'uu-app-creators-leading_name',
      leadingRole: 'uu-app-creators-leading_role',
      otherCreator: 'uu-app-creators-other_creator',
      otherImage: 'uu-app-creators-other_img',
      otherName: 'uu-app-creators-other_name',
      otherRole: 'uu-app-creators-other_role'
    }
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

  render() {
    return (
      <UU5.Layout.Root>
        <UU5.Layout.Container>
          {
            SysAboutData.headerLsi &&
            <UU5.Layout.Row
              className={this.getClassName("about")}
              header={<UU5.Bricks.Lsi lsi={SysAboutData.headerLsi} className={this.getClassName("header")} />}
            >
              {
                SysAboutData.textLsi &&
                <UU5.Bricks.P className={this.getClassName("text")}>
                  <UU5.Bricks.Lsi lsi={SysAboutData.textLsi} />
                </UU5.Bricks.P>
              }
            </UU5.Layout.Row>
          }

          {
            SysAboutData.references &&
            <UU5.Layout.Row className={this.getClassName("references")}>
              {
                SysAboutData.references.map(reference => {
                  return (
                    <UU5.Layout.Column colWidth='lg-4'
                                       className={this.getClassName("reference")}
                                       key={reference.linkText}>
                      <UU5.Bricks.Link content={reference.linkText}
                                       href={reference.linkUrl}
                                       target='_top'
                                       className={this.getClassName("referenceLink")} />
                      <UU5.Bricks.P>
                        <UU5.Bricks.Lsi lsi={reference.textLsi} className={this.getClassName("referenceText")} />
                      </UU5.Bricks.P>
                    </UU5.Layout.Column>
                  )
                })
              }
            </UU5.Layout.Row>
          }

          {
            SysAboutData.creators &&
            <UU5.Layout.RowCollection
              className={this.getClassName("creators")}
              header={<UU5.Bricks.Lsi lsi={SysAboutData.creatorsHeaderLsi} className={this.getClassName("header")} />}
            >
              {
                SysAboutData.creators.leading &&
                <UU5.Layout.Flc>
                  {
                    SysAboutData.creators.leading.map(creator => {
                      return (
                        <UU5.Bricks.Div className={this.getClassName("leadingCreator")} key={creator.name}>
                          <UU5.Bricks.Image
                            src={creator.imgSrc}
                            type='circle'
                            className={this.getClassName("leadingImage")}
                          />
                          <UU5.Bricks.P className={this.getClassName("leadingName")}>{creator.name}</UU5.Bricks.P>
                          <UU5.Bricks.P className={this.getClassName("leadingRole")}>{creator.role}</UU5.Bricks.P>
                        </UU5.Bricks.Div>
                      )
                    })
                  }
                </UU5.Layout.Flc>
              }

              {
                SysAboutData.creators.others &&
                <UU5.Layout.Flc>
                  {
                    SysAboutData.creators.others.map(other => {
                      return (
                        <UU5.Bricks.Div className={this.getClassName("otherCreator")} key={other.name}>
                          <UU5.Bricks.Image
                            src={other.imgSrc}
                            type='circle'
                            className={this.getClassName("otherImage")}
                          />
                          <UU5.Bricks.P className={this.getClassName("otherName")}>{other.name}</UU5.Bricks.P>
                          <UU5.Bricks.P className={this.getClassName("otherRole")}>{other.role}</UU5.Bricks.P>
                        </UU5.Bricks.Div>
                      )
                    })
                  }
                </UU5.Layout.Flc>
              }

            </UU5.Layout.RowCollection>
          }

        </UU5.Layout.Container>
      </UU5.Layout.Root>
    );
  }
});

export default SysAbout;
