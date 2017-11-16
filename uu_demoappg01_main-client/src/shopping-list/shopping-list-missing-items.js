import React from "react";
import createReactClass from 'create-react-class';
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import * as Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";
import PropTypes from "prop-types";

import Cfg from "../core/_config.js";

import DemoSpaAuthenticated from "../core/demo-spa-authenticated.js";
import DemoSpaNotAuthenticated from "../core/demo-spa-not-authenticated.js";

import "../core/demo-spa.less";

const MissingItems = createReactClass({

    //@@viewOn:mixins
    mixins: [
        UU5.Common.BaseMixin,
        UU5.Common.ElementaryMixin,
        UU5.Common.NestingLevelMixin,
        UU5.Common.IdentityMixin,
        UU5.Common.CcrWriterMixin
    ],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics: {
        tagName: Cfg.APP + ".MissingItems",
        nestingLevel: "spa",
        classNames: {
            main: Cfg.CSS + "-shopping-list-table clear-sans"
        },
        opt: {
            nestingLevelWrapper: true,
            ccrKey: Cfg.CCRKEY_SPA
        }
    },

    //@@viewOff:statics

    propTypes: {
        count: PropTypes.number,
    },

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

            <UU5.Bricks.Text label="total count"> {this.props.count} </UU5.Bricks.Text>

        )

    }
    //@@viewOff:render
});

export default MissingItems;
