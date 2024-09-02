import { create } from "zustand";

interface Toast {
  id: number;
  message: string;
}

interface State {
  toasts: Toast[];
  createToast: (message: string) => void;
  deleteToast: (id: number) => void;
}

const useToastStore = create<State>((set) => ({
  toasts: [],
  createToast: (message) => {
    set((state) => ({
      toasts: [...state.toasts, { id: Date.now(), message }],
    }));
  },
  deleteToast: (id) => {
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
  },
}));

export default useToastStore;
