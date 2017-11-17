import React from "react";
import createReactClass from 'create-react-class';
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import * as Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";

import Cfg from "../core/_config.js";

import DemoSpaAuthenticated from "../core/demo-spa-authenticated.js";
import DemoSpaNotAuthenticated from "../core/demo-spa-not-authenticated.js";
import ShoppingListTable from "../shopping-list/shopping-list-table.js";
import ShoppingListResponsibleTable from "../shopping-list/shopping-list-responsive-table.js";
import ShoppingListInput from "../shopping-list/shopping-list-input.js";
import MissingItems from "../shopping-list/shopping-list-missing-items";


import "../core/demo-spa.less";

const CATEGORIES =  ["food", "drinks", "drogs", "alcohol"];
const ShoppingList = createReactClass({

    //@@viewOn:mixins
    mixins: [
        UU5.Common.BaseMixin,
        UU5.Common.ElementaryMixin,
        UU5.Common.NestingLevelMixin,
        UU5.Common.IdentityMixin,
        UU5.Common.CcrWriterMixin,
        UU5.Common.ScreenSizeMixin,
    ],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics: {
        tagName: Cfg.APP + ".ShoppingList",
        nestingLevel: "spa",
        classNames: {
            main: Cfg.CSS + "-shopping-list clear-sans"
        },
        opt: {
            nestingLevelWrapper: true,
            ccrKey: Cfg.CCRKEY_SPA
        },

    },

    getInitialState() {
        return {
            items: [],
            counter: 0,
            breakCache: new Date()
        };
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





    _handleAdd(opt){
        this.setState({ counter: ++ this.state.counter });
        let list = this.state.items.slice();
        list.push({text:opt.value, count: 1, category: opt.category, id: this.state.counter, state:"not bought"});
        this.setState({ items: list })
    },

    _handleRemove(id){
        this.setState({ items: this.state.items.filter(item => item.id != id) });
    },

    _handleChangeState(id){

        let modified = this.state.items.map(element => {
            console.log(element.id);
            if (element.id != id) {
                return element;
            } else {
                element.state = element.state=="not bought" ? "bought":"not bought";
                return element;
            }
        });

        this.setState({ items: modified });
    },

    _handleChangeText(id, text){
        let modified = this.state.items.map(element => {
            console.log(element.id);
            if (element.id != id) {
                return element;
            } else {
                element.text = text;
                return element;
            }
        });

        this.setState({ items: modified });
    },

    _handleChangeCount(id, count){
        let newItems = [];
        this.state.items.forEach((item) => {
            if (item.id != id) {
                newItems.push(item);
            }else {
                console.log("changing count of item to:", count);
                item.count=count;
                newItems.push({... item});
            }
        });
        this.setState({ items: newItems, breakCache: new Date()  });
    },

    //@@viewOff:componentSpecificHelpers

    //@@viewOn:render
    render() {

        if (this.isXs()){
            //no edits on small devices
            return [
                <ShoppingListTable
                    breakCache={this.state.breakCache}
                    onItemRemove={this._handleRemove}
                    onChangeState={this._handleChangeState}
                    onChangeText={this._handleChangeText}
                    onChangeCount={this._handleChangeCount}
                    items={this.state.items}/>
            ]

        }

        return [
            <ShoppingListInput onDataAdded={this._handleAdd} categories={CATEGORIES}/>,
            <ShoppingListTable
                breakCache={this.state.breakCache}
                onItemRemove={this._handleRemove}
                onChangeState={this._handleChangeState}
                onChangeText={this._handleChangeText}
                onChangeCount={this._handleChangeCount}
                items={this.state.items}/>,
            <MissingItems count={this.state.items.length}/>,

            <ShoppingListResponsibleTable
                breakCache={this.state.breakCache}
                onItemRemove={this._handleRemove}
                onChangeState={this._handleChangeState}
                onChangeText={this._handleChangeText}
                onChangeCount={this._handleChangeCount}
                items={this.state.items}/>,

            <MissingItems count={this.state.items.length}/>
        ]


    }
    //@@viewOff:render
});

export default ShoppingList;
