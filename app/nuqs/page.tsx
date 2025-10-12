"use client";

import { useState, Suspense } from "react";
import { MessageDisplay } from "./_components/MessageDisplay";
import { ChangeButton } from "./_components/ChangeButton";
import { CodeExample, PackageManagerInstall } from "../../components";

function NuqsExample() {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <Suspense fallback={<div>Loading...</div>}>
        <MessageDisplay />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ChangeButton />
      </Suspense>
    </div>
  );
}

export default function NuqsPage() {
  const messageDisplayCode = `'use client';

import { useQueryState } from 'nuqs';

export function MessageDisplay() {
  const [message] = useQueryState('message', {
    defaultValue: 'Hello from nuqs!',
  });
  
  return <h1 className="text-2xl mb-4">{message}</h1>;
}`;

  const changeButtonCode = `'use client';

import { useQueryState } from 'nuqs';

export function ChangeButton() {
  const [, setMessage] = useQueryState('message');
  
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      onClick={() => setMessage('Hello World from nuqs!')}
    >
      Change Message
    </button>
  );
}`;

  const usageCode = `// In your page component
import { MessageDisplay } from './_components/MessageDisplay';
import { ChangeButton } from './_components/ChangeButton';

export default function NuqsPage() {
  return (
    <div className="flex flex-col items-center">
      <MessageDisplay />
      <ChangeButton />
    </div>
  );
}`;

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">nuqs Example</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        nuqs is a library for managing URL search parameters in Next.js
        applications. It provides a React Hook API similar to useState but for
        URL state, eliminating the need for prop drilling while persisting state
        in the URL.
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <PackageManagerInstall packageName="nuqs" title="Install nuqs" />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Component Implementations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CodeExample
            code={messageDisplayCode}
            language="typescript"
            title="MessageDisplay Component"
            showLiveOutput={false}
          />

          <CodeExample
            code={changeButtonCode}
            language="typescript"
            title="ChangeButton Component"
            showLiveOutput={false}
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage Example</h2>
        <CodeExample
          code={usageCode}
          language="typescript"
          title="Using Components in Page"
        >
          <NuqsExample />
        </CodeExample>
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">
          How nuqs Eliminates Prop Drilling
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>URL State Management:</strong> Instead of passing data
            through component props, components can directly read and write to
            URL search parameters using the useQueryState hook.
          </li>
          <li>
            <strong>Automatic Persistence:</strong> State is automatically
            persisted in the URL, making it shareable and bookmarkable without
            any additional effort.
          </li>
          <li>
            <strong>No Intermediate Components:</strong> Components can access
            the URL state they need directly without requiring parent components
            to pass props down the tree.
          </li>
          <li>
            <strong>Browser Navigation:</strong> State changes are integrated
            with browser history, allowing users to use the back button to
            navigate between states.
          </li>
        </ul>
      </div>

      <div className="mt-8 p-6 bg-green-50 dark:bg-green-900 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Key Benefits</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            Eliminates the need for prop drilling through component hierarchies
          </li>
          <li>Provides automatic state persistence in the URL</li>
          <li>Integrates seamlessly with browser history and navigation</li>
          <li>Lightweight with zero dependencies (other than React)</li>
          <li>Has TypeScript support out of the box</li>
          <li>Works with both the App Router and Pages Router in Next.js</li>
        </ul>
      </div>
    </>
  );
}
