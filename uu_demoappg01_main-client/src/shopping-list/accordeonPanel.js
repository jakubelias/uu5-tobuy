import React from "react";
import createReactClass from 'create-react-class';
import UU5 from "uu5g04";
import "uu5g04-bricks";
import PropTypes from "prop-types";

let AccordeonPanel = createReactClass({
    //@@viewOn:mixins
    mixins: [
        UU5.Common.BaseMixin,
        UU5.Common.ElementaryMixin
    ],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics: {
        tagName: "AccordeonPanel",
        classNames: {
            main: "uu-trainee-component"
        }
    },
    //@@viewOff:statics

    propTypes: {
        items: PropTypes.array,
        category: PropTypes.any,
        onItemRemove: PropTypes.func,
        onChangeState: PropTypes.func,
        onChangeText: PropTypes.func,
        onChangeCount: PropTypes.func,
    },

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
        console.log("rendering panel .....");
        console.log(this.props.items);
        return this.props.items.map((row) => {
                return (
                    <UU5.Bricks.Column colWidth="s12 m6 xl3" key={row.id}>
                        <UU5.Bricks.Blockquote background colorSchema={row.state== "not bought" ?  "info" :  "success"}>
                            <UU5.Forms.Text label="Edit name:" value={row.text} onBlur={(opt) => this._changeText(row.id, opt.value)}                            />
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
        console.log("inner:", this.props.category);
        return (
            <UU5.Bricks.Row>
                <UU5.Bricks.Panel header={this.props.category}>
                {this._getDataForCategories()}
                </UU5.Bricks.Panel>
            </UU5.Bricks.Row>

        )

    }
    //@@viewOff:render
});

export default AccordeonPanel;
