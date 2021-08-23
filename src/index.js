import React from "react";
import ReactDOM from "react-dom";

import withStore from './with-store'
import App from "./app";

ReactDOM.render(withStore(App), document.querySelector("#root"));
