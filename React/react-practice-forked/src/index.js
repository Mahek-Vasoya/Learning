import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppStore } from "./redux";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
  rootElement
);
