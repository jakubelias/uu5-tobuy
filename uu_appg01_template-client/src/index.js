import React from "react";
import ReactDOM from "react-dom";
import * as UU5 from "uu5g04";

import Uve from "./common/uve.js";

import Calls from "./calls.js";

import "./index.less";

// export UU5 to global space because some code still expects it there
window.UU5 = UU5;

UU5.Environment.App.callConfig.authorizeVuc = Calls.authorizeVuc;

// NOTE To be able to detect which modules are already loaded in SystemJS loader,
// we have to export a rendering method instead of immediately perform the rendering.
export function render(targetElementId) {
  ReactDOM.render(
    <Uve />,
    document.getElementById(targetElementId)
  );
}
