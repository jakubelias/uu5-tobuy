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

const ShoppingListInput = createReactClass({

    //@@viewOn:mixins
    mixins: [
        UU5.Common.BaseMixin,
        UU5.Common.ElementaryMixin,
        UU5.Common.NestingLevelMixin,
        UU5.Common.IdentityMixin,
        UU5.Common.CcrWriterMixin,
        UU5.Common.InputMixin
    ],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics: {
        tagName: Cfg.APP + ".ShoppingListInput",
        nestingLevel: "spa",
        classNames: {
            main: Cfg.CSS + "-shopping-list-table clear-sans"
        },
        opt: {
            nestingLevelWrapper: true,
            ccrKey: Cfg.CCRKEY_SPA
        }
    },


    getInitialState() {
        return {
            category:"drugs"
        };
    },

    //@@viewOff:statics

    propTypes: {
        onDataAdded: PropTypes.func,
        categories: PropTypes.array,
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
    _onDataFilled(opt){
        opt.category = this._categoryInput.getValue();
        this.props.onDataAdded(opt);
    },


    _onChangeCategory(category){
        console.log("category:", category);
        this.setState({ category: category});
    },

    //@@viewOff:componentSpecificHelpers

    //@@viewOn:render
    render() {
        let options = this.props.categories.map((category) => <UU5.Forms.Select.Option value={category}/>);

        return [
            <UU5.Forms.Select label="category" ref_={(input) => this._categoryInput = input}>
                {options}
            </UU5.Forms.Select>,
            <UU5.Forms.TextButton
                value="mrkev"
                label="What should i buy?:"
                buttons={[{
                    glyphicon: 'uu-glyphicon-ok',
                    onClick: (opt) => this._onDataFilled(opt),
                    colorSchema: 'info'
                        }]}
            />
              ]

    }
    //@@viewOff:render
});

export default ShoppingListInput;
