import { content } from "../data";
import { assign, Machine } from "xstate";
import { useMachine } from "@xstate/react";
const ReadMoreMachine = Machine(
  {
    initial: "unknow",
    states: {
      unknow: {
        always: [
          {
            target: "disabled",
            cond: "toCheckChar200"
          },
          {
            target: "cliped"
          }
        ]
      },
      cliped: {
        onEntry: "clip",
        on: {
          TOGGLE: { target: "un_cliped" }
        }
      },
      un_cliped: {
        onEntry: "unClip",
        on: {
          TOGGLE: { target: "cliped" }
        }
      },
      disabled: {
        on: {}
      }
    }
  },
  {
    guards: {
      toCheckChar200: function (context) {
        return context.content.length < 200;
      }
    },
    actions: {
      clip: assign(function (context) {
        return {
          ...context,
          showContent: context.content.slice(0, 200)
        };
      }),
      unClip: assign(function (context) {
        return {
          ...context,
          showContent: context.content
        };
      })
    }
  }
);

export default function ReadMore() {
  return (
    <div className="App">
      {content.map((contentObj, index) => (
        <DisplayContent key={index} data={contentObj} />
      ))}
    </div>
  );
}

const DisplayContent = ({ data }) => {
  const [state, send] = useMachine(ReadMoreMachine, {
    context: {
      content: data,
      showContent: data
    }
  });
  const { context, value } = state;
  const showContent = context.showContent;
  const clipText = value === "cliped" ? "Read More" : "Read Less";
  return (
    <div>
      <p>{showContent}</p>
      {value === "disabled" ? null : (
        <button
          type="button"
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => send("TOGGLE")}
        >
          {clipText}
        </button>
      )}
    </div>
  );
};
