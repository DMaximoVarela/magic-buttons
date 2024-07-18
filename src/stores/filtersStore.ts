import { create } from "zustand";

interface FiltersSelected {
  hover?: boolean;
  animacion?: boolean;
  interactivo?: boolean;
}

interface Filters {
  size: "Tamaño" | "Pequeño" | "Mediano" | "Grande";
  style: "Estilo" | "Plano" | "Elevado" | "Redondeado" | "3D" | "Gradiente";
  filters: FiltersSelected[];
}

interface State {
  filters: Filters;
}

interface Actions {
  filterSize: (filter: "Tamaño" | "Pequeño" | "Mediano" | "Grande") => void;
  filterStyle: (
    filter: "Estilo" | "Plano" | "Elevado" | "Redondeado" | "3D" | "Gradiente"
  ) => void;
  filterSelected: (filter: FiltersSelected) => void;
  removeFilterSize: () => void;
  removeFilterStyle: () => void;
  removeFilterSelected: (filter: FiltersSelected) => void;
  resetFilters: () => void;
}

const initialState: Filters = {
  size: "Tamaño",
  style: "Estilo",
  filters: [],
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
        filters: [...state.filters.filters, filter],
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

  removeFilterSelected: (filter) => {
    set((state) => ({
      filters: {
        ...state.filters,
        filters: state.filters.filters.filter(
          (selectedFilter) =>
            selectedFilter.hover !== filter.hover ||
            selectedFilter.animacion !== filter.animacion ||
            selectedFilter.interactivo !== filter.interactivo
        ),
      },
    }));
  },

  resetFilters: () => {
    set({ filters: initialState });
  },
}));

export default useFiltersStore;
