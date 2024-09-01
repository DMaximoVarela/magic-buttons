import { create } from "zustand";

interface State {
  modal: boolean;
  setModal: (modal: boolean) => void;
  btnId: number | null;
  setBtnId: (id: number) => void;
  active?: boolean;
  setActive?: (active: boolean) => void;
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
  active: false,
  setActive: (active) => {
    set({ active: active });
  },
}));

export default useModalStore;
