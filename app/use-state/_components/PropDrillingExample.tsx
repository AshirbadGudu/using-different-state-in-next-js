"use client";

import { useState } from "react";
import { MessageDisplay } from "./MessageDisplay";
import { ChangeButton } from "./ChangeButton";

export function PropDrillingExample() {
  const [message, setMessage] = useState("Hello from Prop Drilling");

  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow">
      <MessageDisplay message={message} />
      <ChangeButton onChange={setMessage} />
    </div>
  );
}
