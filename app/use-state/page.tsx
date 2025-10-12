"use client";

import { useState } from "react";
import { CodeExample } from "../../components";

export default function UseStatePage() {
  const [message, setMessage] = useState("Hello");

  const changeMessage = () => {
    setMessage("Hello World!");
  };

  const codeString = `import { useState } from 'react';

export default function MessageChanger() {
  const [message, setMessage] = useState("Hello");

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage("Hello World!")}>
        Change Message
      </button>
    </div>
  );
}`;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">useState Example</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        The useState hook is React's built-in solution for managing local
        component state.
      </p>

      <CodeExample
        code={codeString}
        language="typescript"
        title="Simple Message Changer with useState"
      >
        <div className="flex flex-col items-center">
          <p className="text-2xl mb-4">{message}</p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={changeMessage}
          >
            Change Message
          </button>
        </div>
      </CodeExample>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Key Points:</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          <li>
            useState returns an array with the current state and a setter
            function
          </li>
          <li>
            The setter function can accept a new value or a function that
            receives the previous state
          </li>
          <li>Best for simple, localized state management</li>
          <li>Re-renders the component when state changes</li>
        </ul>
      </div>
    </div>
  );
}
