"use client";

import { useReducer } from "react";
import { CodeExample } from "../../components";

type State = {
  count: number;
};

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action type");
  }
}

export default function UseReducerPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const codeString = `import { useReducer } from 'react';

type State = {
  count: number;
};

type Action = 
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action type");
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}`;

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">useReducer Example</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        The useReducer hook is an alternative to useState for managing more
        complex state logic. It's particularly useful when the state logic is
        complex or when the next state depends on the previous state.
      </p>

      <CodeExample
        code={codeString}
        language="typescript"
        title="Counter Component with useReducer"
      >
        <div className="flex flex-col items-center">
          <p className="text-2xl mb-4">Count: {state.count}</p>
          <div className="flex gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              onClick={() => dispatch({ type: "increment" })}
            >
              Increment
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              onClick={() => dispatch({ type: "decrement" })}
            >
              Decrement
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              onClick={() => dispatch({ type: "reset" })}
            >
              Reset
            </button>
          </div>
        </div>
      </CodeExample>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Key Points:</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          <li>useReducer is preferred for complex state logic</li>
          <li>It takes a reducer function and initial state</li>
          <li>Returns the current state and a dispatch function</li>
          <li>Dispatch function is used to trigger state changes</li>
          <li>
            Reducer function determines how state changes in response to actions
          </li>
        </ul>
      </div>
    </>
  );
}
