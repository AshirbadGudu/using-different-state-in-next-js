"use client";

import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeExampleProps {
  code: string;
  language?: string;
  children?: React.ReactNode;
  title?: string;
  showLiveOutput?: boolean;
}

export default function CodeExample({
  code,
  language = "typescript",
  children,
  title,
  showLiveOutput = true,
}: CodeExampleProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-6 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {title && (
        <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        {/* Toggle Buttons */}
        {showLiveOutput && children && (
          <div className="flex border-b border-gray-200 dark:border-gray-700 md:border-b-0 md:border-r">
            <button
              className={`flex-1 md:flex-none px-4 py-2 text-sm font-medium ${
                !showCode
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setShowCode(false)}
            >
              Live Output
            </button>
            <button
              className={`flex-1 md:flex-none px-4 py-2 text-sm font-medium ${
                showCode
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setShowCode(true)}
            >
              Code
            </button>
          </div>
        )}

        {/* Copy Button */}
        <div className="border-b border-gray-200 dark:border-gray-700 md:border-b-0 md:border-r">
          <button
            className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center"
            onClick={copyToClipboard}
          >
            {copied ? (
              <>
                <svg
                  className="w-4 h-4 mr-1 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 bg-white dark:bg-gray-900">
        {showCode || !showLiveOutput || !children ? (
          <div className="overflow-x-auto">
            <SyntaxHighlighter
              language={language}
              style={oneDark}
              customStyle={{
                margin: 0,
                borderRadius: "0.5rem",
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        ) : showLiveOutput && children ? (
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}
