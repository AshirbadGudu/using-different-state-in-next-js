"use client";

import { useMessageStore } from "../store";

export function ChangeButton() {
  const updateMessage = useMessageStore((state) => state.updateMessage);

  const handleClick = () => {
    updateMessage("Hello World from Zustand!");
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
