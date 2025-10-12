"use client";

import { useMessageStore } from "../store";

export function MessageDisplay() {
  const message = useMessageStore((state) => state.message);

  return <h1 className="text-2xl mb-4">{message}</h1>;
}
