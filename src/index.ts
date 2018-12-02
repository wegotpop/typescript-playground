import * as React from "react";
import * as ReactDOM from "react-dom";
import "./accessModifier";
import "./greeter";
import "./interfaces";
import * as popsss from "./popsss";

import { App } from "./App";
popsss.alert("Hello, world!", "danger");

/* Setup of the App */
const content = document.querySelector("#main-content");
ReactDOM.render(React.createElement(App), content);

if (module.hot) {
  module.hot.accept();
}
/* End of setup */
