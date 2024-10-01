import React, { useState } from "react";
// import Comp from "./components/useStateHook";
// import Comp from "./components/useEffectHook";
// import Comp from "./components/useRefHook";
// import Comp from "./components/useCallBackHook";
// import Comp from "./components/useContextHook";
// import Comp from "./components/useReducerHook";
import Comp from "./components/reactLifeCycle";
// import Comp from "./components/errorBoudry";
//import Comp from "./components/Redux";
// import Comp from "./components/reactHooksWithExample";
// import Comp from "./components/testingComponent";
const App = () => {
  // const [counter, setcounter] = useState(0);
  // const [hide, setHide] = useState(false);
  return (
    <div>
      <Comp />
      {/* <p>React Practice</p> */}
      {/* <ReactHooksWithExample /> */}
      {/* <ReduxComponent /> */}
      {/* <ErrorBoundry /> */}
      {/* <div>
        {!hide && <ReactLifeCycle />}
        <button onClick={() => setHide(!hide)}>toggle</button>
      </div> */}
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseCallBackHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseReducerHook /> */}
      {/* <button onClick={() => setcounter((prev) => prev + 1)}>
        {counter} + Counter
      </button> */}
    </div>
  );
};

export default App;
