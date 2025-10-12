import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
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
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors md:col-span-2 lg:col-span-1"
          >
            <h2 className="text-xl font-semibold mb-2">Redux Toolkit</h2>
            <p className="text-gray-600 dark:text-gray-400">
              The official, recommended way to use Redux
            </p>
          </Link>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            Click on any of the above links to explore each state management
            solution
          </p>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
