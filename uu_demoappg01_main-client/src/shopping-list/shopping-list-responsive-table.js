import React from "react";
import createReactClass from 'create-react-class';
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import * as Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";
import PropTypes from "prop-types";
import AccordeonPanel from "../shopping-list/accordeonPanel";

import Cfg from "../core/_config.js";



import "../core/demo-spa.less";

const ShoppingListResponsibleTable = createReactClass({

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
        tagName: Cfg.APP + ".ShoppingListResponsibleTable",
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

    //@@viewOn:propTypes

    propTypes: {
        items: PropTypes.array,
        categories: PropTypes.array,
        onItemRemove: PropTypes.func,
        onChangeState: PropTypes.func,
        onChangeText: PropTypes.func,
        onChangeCount: PropTypes.func,
    },

    //@@viewOff:propTypes

    //@@viewOn:getDefaultProps
    getDefaultProps() {
        return {items: []}
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
        let panels = this.props.categories.map(
            (category) => <AccordeonPanel
                key={category}
                category={category}
                items={this.props.items.filter(item => item.category == category) }
                onItemRemove={this.props.onItemRemove}
                onChangeState={this.props.onChangeState}
                onChangeText={this.props.onChangeText}
                onChangeCount={this.props.onChangeCount}
         />);


        return (
            <UU5.Bricks.Accordion allowTags={["AccordeonPanel"]}>
                {panels}
            </UU5.Bricks.Accordion>
        )
    }
    //@@viewOff:render
});

export default ShoppingListResponsibleTable;
