import React from "react";
import ReactDOM from "react-dom";

import DemoSpa from "./core/demo-spa.js";
import ShoppingListController from "./shopping-list/shopping-list-controller";

import "./index.less";

export function render(targetElementId) {
  ReactDOM.render(
    <ShoppingListController />,
    document.getElementById(targetElementId)
  );
}
