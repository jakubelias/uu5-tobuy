import React from "react";
import createReactClass from 'create-react-class';
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import * as Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";
import PropTypes from "prop-types";

import Cfg from "../core/_config.js";



import "../core/demo-spa.less";

const ShoppingListTable = createReactClass({

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
        tagName: Cfg.APP + ".ShoppingListTable",
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
    },

    getDefaultProps() {
        return {items: []}
    },
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


    _deleteItem(id){
        alert("delete" + id);
    },

    _getDataForCategories(){
        console.log("rendering table .....");
        console.log(this.props.items);
        return this.props.items.map((row) => {
                return (
                    <UU5.Bricks.Table.Tr key={row.id}>
                        <UU5.Bricks.Table.Td content={row.text}/>
                        <UU5.Bricks.Table.Td content={row.category}/>
                        <UU5.Bricks.Table.Td>
                            <UU5.Forms.Number  value={row.count} onChange/>
                        </UU5.Bricks.Table.Td>
                        <UU5.Bricks.Table.Td>
                            <UU5.Bricks.Button onClick={()=>{this._deleteItem(row.id);}}>delete</UU5.Bricks.Button>
                        </UU5.Bricks.Table.Td>
                    </UU5.Bricks.Table.Tr>
                )
            }
        )
    },
    //@@viewOff:componentSpecificHelpers

    //@@viewOn:render
    render() {
        return (
        <UU5.Bricks.Table responsive header='Shopping List' footer='UU5 Super App' hover>
            <UU5.Bricks.Table.THead>
                <UU5.Bricks.Table.Tr>
                    <UU5.Bricks.Table.Th content='text'/>
                    <UU5.Bricks.Table.Th content="category"/>
                    <UU5.Bricks.Table.Th content="count"/>

                </UU5.Bricks.Table.Tr>
            </UU5.Bricks.Table.THead>
            <UU5.Bricks.Table.TBody>
                {this._getDataForCategories()}
            </UU5.Bricks.Table.TBody>
        </UU5.Bricks.Table>
        )
    }
    //@@viewOff:render
});

export default ShoppingListTable;
