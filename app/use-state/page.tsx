"use client";

import { useState } from "react";
import { CodeExample } from "../../components";
import { PropDrillingExample } from "./_components/PropDrillingExample";

export default function UseStatePage() {
  const [message, setMessage] = useState("Hello");

  const changeMessage = () => {
    setMessage("Hello World!");
  };

  const simpleCodeString = `import { useState } from 'react';

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

  const propDrillingCodeString = `import { useState } from 'react';

// Child component that displays the message
function MessageDisplay({ message }) {
  return <h1>{message}</h1>;
}

// Child component with button that triggers change
function ChangeButton({ onChange }) {
  return (
    <button onClick={() => onChange("Hello World!")}>
      Change Message
    </button>
  );
}

// Parent component that manages state
export default function PropDrillingExample() {
  const [message, setMessage] = useState("Hello");

  return (
    <div>
      <MessageDisplay message={message} />
      <ChangeButton onChange={setMessage} />
    </div>
  );
}`;

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">useState Example</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        The useState hook is React's built-in solution for managing local
        component state.
      </p>

      <CodeExample
        code={simpleCodeString}
        language="typescript"
        title="Simple Message Changer with useState"
      >
        <div className="flex flex-col items-center">
          <p className="text-2xl mb-4">{message}</p>
          <button
            type="button"
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

      {/* Prop Drilling Example Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Prop Drilling Example</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          This example demonstrates how state can be passed down through
          components (prop drilling). The parent component manages the state and
          passes it down to child components as props.
        </p>

        <CodeExample
          code={propDrillingCodeString}
          language="typescript"
          title="Prop Drilling Implementation"
        >
          <PropDrillingExample />
        </CodeExample>

        <div className="mt-4 p-4 bg-green-50 dark:bg-green-900 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">
            How Prop Drilling Works:
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>The parent component manages the state with useState</li>
            <li>
              The message state is passed down to the MessageDisplay component
              as a prop
            </li>
            <li>
              The setMessage function is passed down to the ChangeButton
              component as a prop
            </li>
            <li>
              When the button is clicked, it calls the setter function which
              updates the parent's state
            </li>
            <li>
              The updated state flows back down to the MessageDisplay component
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
