import { create } from "zustand";

interface State {
  message: string;
  setMessage: (message: string) => void;
  active: boolean;
  setActive: (active: boolean) => void;
}

const useToastStore = create<State>((set) => ({
  message: "",
  setMessage: (message) => {
    set({ message: message });
  },
  active: false,
  setActive: (active) => {
    set({ active: active });
  },
}));

export default useToastStore;
