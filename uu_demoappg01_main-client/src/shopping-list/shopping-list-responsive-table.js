import React from "react";
import createReactClass from 'create-react-class';
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import * as Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";
import PropTypes from "prop-types";

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
        breakCache: PropTypes.any,
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


    _deleteItem(id){
        console.log("delete" + id);
        this.props.onItemRemove(id);
    },

    _changeState(id){
        console.log("change state" + id);
        this.props.onChangeState(id);
    },

    _changeText(id, text){
        console.log("change text" + id, text);
        this.props.onChangeText(id, text);
    },

    _changeCount(id, count){
        console.log("change count" + id, count);
        this.props.onChangeCount(id, count);
    },

    _getDataForCategories(){
        console.log("rendering table .....");
        console.log(this.props.items);
        return this.props.items.map((row) => {
                return (


                        <UU5.Bricks.Column colWidth="s12 m6 xl3" key={row.id}>
                            <UU5.Bricks.Blockquote background colorSchema={row.state== "not buyed" ?  "info" :  "success"}>

                            <UU5.Forms.Text
                                label="Write here"
                                value={row.text}
                                onBlur={(opt) => this._changeText(row.id, opt.value)}

                            />

                                <UU5.Forms.Number  value={row.count} onChange={(opt) => this._changeCount(row.id, opt.value)}/>
                                <UU5.Bricks.Button onClick={()=>{this._deleteItem(row.id);}}>delete</UU5.Bricks.Button>
                                <UU5.Bricks.Button onClick={()=>{this._changeState(row.id);}}>{row.state}</UU5.Bricks.Button>

                            </UU5.Bricks.Blockquote>
                        </UU5.Bricks.Column>

                )
            }
        )
    },
    //@@viewOff:componentSpecificHelpers

    //@@viewOn:render
    render() {
        return (
            <UU5.Bricks.Row responsive header='Shopping List' footer='UU5 Super App.' hover>
                    {this._getDataForCategories()}
            </UU5.Bricks.Row>
        )
    }
    //@@viewOff:render
});

export default ShoppingListResponsibleTable;
