import { useState } from "react";

interface ChangeButtonProps {
  onChange: (newMessage: string) => void;
}

export function ChangeButton({ onChange }: ChangeButtonProps) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      onClick={() => onChange("Hello World!")}
    >
      Change Message
    </button>
  );
}
