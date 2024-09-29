import { create } from "zustand";

interface State {
  modal: boolean;
  setModal: (modal: boolean) => void;
  btnId: number | null;
  setBtnId: (id: number) => void;
  authorId: number;
  setAuthorId: (id: number) => void;
  active: boolean;
  setActive: (active: boolean) => void;
  resetBAId: () => void;
}

const useModalStore = create<State>((set) => ({
  modal: false,
  setModal: (modal) => {
    set({ modal: modal });
  },
  btnId: null,
  setBtnId: (id) => {
    set({ btnId: id });
  },
  authorId: 0,
  setAuthorId: (id) => {
    set({ authorId: id });
  },
  active: false,
  setActive: (active) => {
    set({ active: active });
  },
  resetBAId: () => {
    set({ btnId: null, authorId: 0 });
  },
}));

export default useModalStore;
