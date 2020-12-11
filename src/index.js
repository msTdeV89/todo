import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Modal from "./components/Modal";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Modal />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
