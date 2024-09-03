import { create } from "zustand";

interface State {
  language: "es" | "en";
  setLanguage: (language: "es" | "en") => void;
}

const useLanguageStore = create<State>((set) => ({
  language: "es",
  setLanguage: (language) => {
    set({ language: language });
  },
}));

export default useLanguageStore;
