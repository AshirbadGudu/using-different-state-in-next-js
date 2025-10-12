"use client";

import { useQueryState } from "nuqs";

export function ChangeButton() {
  const [, setMessage] = useQueryState("message", {
    defaultValue: "Hello from nuqs!",
    parse: (value) => value,
    serialize: (value) => value,
  });

  const handleClick = () => {
    setMessage("Hello World from nuqs!");
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      onClick={handleClick}
    >
      Change Message
    </button>
  );
}
