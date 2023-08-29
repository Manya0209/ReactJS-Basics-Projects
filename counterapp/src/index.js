/*
Bridge file b/w component and index.html
from app component we get JSx(VDOM) and give it to reactdom, to convert vdom to dom
*/

import React from "react";
import  ReactDOM from "react-dom/client";
import App from "./App";

//DOM
const div = document.querySelector('#root');
const root= ReactDOM.createRoot(div);
root.render(<App/>);