"use client";

import { CodeExample } from "../../components";

export default function ContextApiPage() {
  const contextCode = `import React, { createContext, useContext, useState } from 'react';

// Create context
const CounterContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {}
});

// Provider component
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
}

// Custom hook to use the context
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}

// Component that uses the context
export function CounterDisplay() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Context API Example</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        The Context API is React's built-in solution for managing global state.
        It allows you to share state across multiple components without prop
        drilling.
      </p>

      <CodeExample
        code={contextCode}
        language="typescript"
        title="Counter Context Implementation"
      >
        <div className="text-center">
          <p className="text-lg mb-4">
            This is a demonstration of how Context API works.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            In a real implementation, you would wrap your app with the provider
            and use the custom hook in components.
          </p>
        </div>
      </CodeExample>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Key Points:</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          <li>Context API solves the prop drilling problem</li>
          <li>Create a context with createContext</li>
          <li>Provide values with Context.Provider</li>
          <li>Consume values with useContext hook</li>
          <li>Best for global state that doesn't change frequently</li>
        </ul>
      </div>
    </div>
  );
}
