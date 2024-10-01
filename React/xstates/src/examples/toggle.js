import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";

const CheckboxMachine = createMachine({
  states: {
    switched_off: {
      on: {
        TOGGLE: { target: "switched_on" }
      }
    },
    switched_on: {
      on: {
        TOGGLE: { target: "switched_off" }
      }
    }
  },
  initial: "switched_off"
});

export default function ToggleSwitch() {
  const [state, send] = useMachine(CheckboxMachine);
  return (
    <div className="App">
      <input
        checked={state.value === "switched_on"}
        onChange={() => send("TOGGLE")}
        type="checkbox"
      />
    </div>
  );
}
