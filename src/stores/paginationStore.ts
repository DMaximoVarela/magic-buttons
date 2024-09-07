import { create } from "zustand";

interface State {
  active: number;
  setActive: (active: number) => void;
}

const usePaginationStore = create<State>((set) => ({
  active: 0,
  setActive: (active) => {
    set({ active: active });
  },
}));

export default usePaginationStore;
