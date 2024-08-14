import { create } from "zustand";

interface Filters {
  size: "Tamaño" | "Pequeño" | "Mediano" | "Grande";
  style: "Estilo" | "Plano" | "Elevado" | "Redondeado" | "3D" | "Gradiente";
  category: "null" | "Hover" | "Animación" | "Interactivo";
}

interface State {
  filters: Filters;
}

interface Actions {
  filterSize: (filter: "Tamaño" | "Pequeño" | "Mediano" | "Grande") => void;
  filterStyle: (
    filter: "Estilo" | "Plano" | "Elevado" | "Redondeado" | "3D" | "Gradiente"
  ) => void;
  filterSelected: (
    filter: "null" | "Hover" | "Animación" | "Interactivo"
  ) => void;
  removeFilterSize: () => void;
  removeFilterStyle: () => void;
  removeFilterSelected: () => void;
  resetFilters: () => void;
}

const initialState: Filters = {
  size: "Tamaño",
  style: "Estilo",
  category: "null",
};

const useFiltersStore = create<State & Actions>((set) => ({
  filters: initialState,

  filterSize: (filter) => {
    set((state) => ({
      filters: {
        ...state.filters,
        size: filter,
      },
    }));
  },

  filterStyle: (filter) => {
    set((state) => ({
      filters: {
        ...state.filters,
        style: filter,
      },
    }));
  },

  filterSelected: (filter) => {
    set((state) => ({
      filters: {
        ...state.filters,
        category: filter,
      },
    }));
  },

  removeFilterSize: () => {
    set((state) => ({
      filters: {
        ...state.filters,
        size: "Tamaño",
      },
    }));
  },

  removeFilterStyle: () => {
    set((state) => ({
      filters: {
        ...state.filters,
        style: "Estilo",
      },
    }));
  },

  removeFilterSelected: () => {
    set((state) => ({
      filters: {
        ...state.filters,
        category: "null",
      },
    }));
  },

  resetFilters: () => {
    set({ filters: initialState });
  },
}));

export default useFiltersStore;
