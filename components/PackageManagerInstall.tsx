"use client";

import { useState } from "react";

interface PackageManager {
  command: string;
  icon: string;
}

const packageManagers = {
  npm: {
    command: "",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg",
  },
  yarn: {
    command: "",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original.svg",
  },
  pnpm: {
    command: "",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original.svg",
  },
  bun: {
    command: "",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
  },
} as const;

type PackageManagerKey = keyof typeof packageManagers;

interface PackageManagerInstallProps {
  packageName: string;
  title: string;
}

export default function PackageManagerInstall({
  packageName,
  title,
}: PackageManagerInstallProps) {
  const [activeTab, setActiveTab] = useState<PackageManagerKey>("npm");
  const [copied, setCopied] = useState(false);

  // Update commands with the specific package name
  const packageManagersWithCommands = {
    npm: {
      ...packageManagers.npm,
      command: `npm install ${packageName}`,
    },
    yarn: {
      ...packageManagers.yarn,
      command: `yarn add ${packageName}`,
    },
    pnpm: {
      ...packageManagers.pnpm,
      command: `pnpm add ${packageName}`,
    },
    bun: {
      ...packageManagers.bun,
      command: `bun add ${packageName}`,
    },
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-6 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>

      <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
        {Object.entries(packageManagersWithCommands).map(([pkg, { icon }]) => (
          <button
            key={pkg}
            className={`flex items-center px-4 py-2 text-sm font-medium ${
              activeTab === pkg
                ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(pkg as PackageManagerKey)}
            type="button"
          >
            <img
              src={icon}
              alt={pkg}
              className="w-5 h-5 mr-2"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement!.innerHTML = pkg;
              }}
            />
            {pkg}
          </button>
        ))}
      </div>

      <div className="p-4 bg-white dark:bg-gray-900">
        <div className="overflow-x-auto">
          <div className="relative">
            <pre className="p-4 rounded-lg bg-gray-800 text-gray-100 text-sm font-mono overflow-x-auto pr-16">
              {packageManagersWithCommands[activeTab].command}
              <button
                type="button"
                onClick={() => {
                  copyText(packageManagersWithCommands[activeTab].command);
                }}
                className="absolute top-3 right-3 px-3 py-1.5 text-sm flex items-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-all"
              >
                {copied ? (
                  <>
                    <svg
                      className="w-4 h-4 mr-1 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
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
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
