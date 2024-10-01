import { Provider } from "react-redux";
import { AppStore } from "./redux";
import FetchData from "./FetchData.js";
import "./styles.css";

export default function App() {
  return (
    // proving store access to application
    <Provider store={AppStore}>
      <FetchData />
    </Provider>
  );
}
