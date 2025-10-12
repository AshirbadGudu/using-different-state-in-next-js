"use client";

import { useQueryState } from "nuqs";

export function MessageDisplay() {
  const [message] = useQueryState("message", {
    defaultValue: "Hello from nuqs!",
    parse: (value) => value,
    serialize: (value) => value,
  });

  return <h1 className="text-2xl mb-4">{message}</h1>;
}
