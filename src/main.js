import React from "react";
import ReactDOM from "react-dom";
import CatsBoard from "./components/CatsBoard/CatsBoard";
import { Provider } from "react-redux";
import store from "./store/store";

const app = document.getElementById('app');
ReactDOM.render(<Provider store={store}><CatsBoard/></Provider>, app);