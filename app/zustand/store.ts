import { create } from "zustand";

interface MessageStore {
  message: string;
  updateMessage: (newMessage: string) => void;
}

export const useMessageStore = create<MessageStore>((set) => ({
  message: "Hello from Zustand!",
  updateMessage: (newMessage) => set({ message: newMessage }),
}));
