import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-[32px] items-center sm:items-start">
        <ThemeToggle />

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold mb-4">
            State Management in Next.js
          </h1>
          <p className="mb-6">
            Explore different state management solutions in Next.js:
          </p>
          <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            Each example includes interactive code demonstrations with our
            reusable CodeExample component
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          <Link
            href="/use-state"
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">useState</h2>
            <p className="text-gray-600 dark:text-gray-400">
              React's built-in hook for local component state
            </p>
          </Link>

          <Link
            href="/use-reducer"
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">useReducer</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Alternative to useState for complex state logic
            </p>
          </Link>

          <Link
            href="/context-api"
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">Context API</h2>
            <p className="text-gray-600 dark:text-gray-400">
              React's built-in solution for global state
            </p>
          </Link>

          <Link
            href="/zustand"
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">Zustand</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Small, fast, and scalable state management
            </p>
          </Link>

          <Link
            href="/redux-toolkit"
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">Redux Toolkit</h2>
            <p className="text-gray-600 dark:text-gray-400">
              The official, recommended way to use Redux
            </p>
          </Link>

          <Link
            href="/nuqs"
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">nuqs</h2>
            <p className="text-gray-600 dark:text-gray-400">
              URL-based state management for Next.js
            </p>
          </Link>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            Click on any of the above links to explore each state management
            solution
          </p>
        </div>
      </div>
    </>
  );
}
