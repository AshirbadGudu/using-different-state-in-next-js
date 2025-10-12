"use client";

import { useState } from "react";

interface PackageManagers {
  [key: string]: {
    command: string;
    icon: string;
  };
}

interface PackageManagerInstallProps {
  packageManagers: PackageManagers;
  title: string;
}

export default function PackageManagerInstall({
  packageManagers,
  title,
}: PackageManagerInstallProps) {
  const [activeTab, setActiveTab] = useState("npm");

  return (
    <div className="my-6 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>

      <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
        {Object.entries(packageManagers).map(([pkg, { icon }]) => (
          <button
            key={pkg}
            className={`flex items-center px-4 py-2 text-sm font-medium ${
              activeTab === pkg
                ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(pkg)}
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
          <pre className="p-4 rounded-lg bg-gray-800 text-gray-100">
            {packageManagers[activeTab as keyof typeof packageManagers].command}
          </pre>
        </div>
      </div>
    </div>
  );
}
