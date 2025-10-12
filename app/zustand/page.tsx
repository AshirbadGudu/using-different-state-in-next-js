"use client";

import { useState } from "react";
import { MessageDisplay } from "./_components/MessageDisplay";
import { ChangeButton } from "./_components/ChangeButton";
import { CodeExample, PackageManagerInstall } from "../../components";

export default function ZustandPage() {
  const packageManagers = {
    npm: {
      command: "npm install zustand",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg",
    },
    yarn: {
      command: "yarn add zustand",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original.svg",
    },
    pnpm: {
      command: "pnpm add zustand",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original.svg",
    },
    bun: {
      command: "bun add zustand",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
    },
  };

  const storeCode = `import { create } from 'zustand';

interface MessageStore {
  message: string;
  updateMessage: (newMessage: string) => void;
}

export const useMessageStore = create<MessageStore>((set) => ({
  message: 'Hello from Zustand!',
  updateMessage: (newMessage) => set({ message: newMessage }),
}));`;

  const messageDisplayCode = `'use client';

import { useMessageStore } from '../store';

export function MessageDisplay() {
  const message = useMessageStore((state) => state.message);
  
  return <h1 className="text-2xl mb-4">{message}</h1>;
}`;

  const changeButtonCode = `'use client';

import { useMessageStore } from '../store';

export function ChangeButton() {
  const updateMessage = useMessageStore((state) => state.updateMessage);
  
  const handleClick = () => {
    updateMessage('Hello World from Zustand!');
  };
  
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      onClick={handleClick}
    >
      Change Message
    </button>
  );
}`;

  const usageCode = `// In your page component
import { MessageDisplay } from './_components/MessageDisplay';
import { ChangeButton } from './_components/ChangeButton';

export default function ZustandPage() {
  return (
    <div className="flex flex-col items-center">
      <MessageDisplay />
      <ChangeButton />
    </div>
  );
}`;

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Zustand Example</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        Zustand is a small, fast, and scalable state management solution for
        React. It helps eliminate prop drilling by providing a global store that
        components can access directly.
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <PackageManagerInstall
          packageManagers={packageManagers}
          title="Install Zustand"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Store Implementation</h2>
        <CodeExample
          code={storeCode}
          language="typescript"
          title="Zustand Store"
          showLiveOutput={false}
        />
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
          <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <MessageDisplay />
            <ChangeButton />
          </div>
        </CodeExample>
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">
          How Zustand Eliminates Prop Drilling
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Global Store:</strong> Instead of passing data down through
            multiple component levels, components can directly access the store
            using the useMessageStore hook.
          </li>
          <li>
            <strong>No Intermediate Components:</strong> Components can access
            the state they need directly without requiring parent components to
            pass props down the tree.
          </li>
          <li>
            <strong>Selective Updates:</strong> Components only re-render when
            the specific state they subscribe to changes, making the application
            more efficient.
          </li>
          <li>
            <strong>Simplified Component Structure:</strong> Parent components
            don't need to manage state that's only used by deeply nested
            children.
          </li>
        </ul>
      </div>

      <div className="mt-8 p-6 bg-green-50 dark:bg-green-900 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Key Benefits</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            Eliminates the need for prop drilling through component hierarchies
          </li>
          <li>Provides a simple API for creating and using global state</li>
          <li>Lightweight with zero dependencies</li>
          <li>Supports both React and React Native</li>
          <li>Has TypeScript support out of the box</li>
        </ul>
      </div>
    </>
  );
}
