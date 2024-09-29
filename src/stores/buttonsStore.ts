import { create } from "zustand";
import axios from "axios";
import Button from "@/components/button/button";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Button {
  id: number;
  categoria: string;
  tamano: string;
  estilo: string;
  htmlCode: string;
  cssCode: string;
  tailwindCode: string;
  authorId: number;
}

interface State {
  buttons: Button[];
  buttonsCopy: Button[];
  button: Button | null;
  randomButton: Button | null;
  loading: boolean;
  loadingInd: boolean;
  getButtons: (categoria?: string, tamano?: string, estilo?: string) => void;
  getAllButtons: () => void;
  getButtonById: (id: string) => void;
  getRandomButton: (id: string) => void;
  resetButton: () => void;
}

const getButtons = async (
  categoria?: string,
  tamano?: string,
  estilo?: string
) => {
  try {
    let url = `${API_URL}buttons`;
    const params = new URLSearchParams();

    if (categoria) params.append("categoria", categoria);
    if (tamano) params.append("tamano", tamano);
    if (estilo) params.append("estilo", estilo);

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Error al obtener botones:", error);
    throw error;
  }
};

const getAllButtons = async () => {
  try {
    let url = `${API_URL}buttons`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Error al obtener botones:", error);
    throw error;
  }
};

const getButtonById = async (id: string) => {
  try {
    let url = `${API_URL}buttons/${id}`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Error al obtener el botón:", error);
    throw error;
  }
};

const useButtonsStore = create<State>((set) => ({
  buttons: [],
  buttonsCopy: [],
  button: null,
  randomButton: null,
  loading: true,
  loadingInd: true,
  getButtons: async (categoria?: string, tamano?: string, estilo?: string) => {
    try {
      set({ loading: true });
      const buttonsFiltered = await getButtons(categoria, tamano, estilo);
      set({ buttons: buttonsFiltered });
    } catch (error) {
      console.error("Error en el store:", error);
    } finally {
      set({ loading: false });
    }
  },
  getAllButtons: async () => {
    try {
      set({ loading: true });
      const buttons = await getAllButtons();
      set({ buttonsCopy: buttons });
    } catch (error) {
      console.error("Error en la store: ", error);
    } finally {
      set({ loading: false });
    }
  },
  getButtonById: async (id: string) => {
    try {
      set({ loadingInd: true });
      const button = await getButtonById(id);
      set({ button: button });
    } catch (error) {
      console.error("Error en la store:", error);
      set({ button: null });
    } finally {
      set({ loadingInd: false });
    }
  },
  getRandomButton: async (id) => {
    try {
      set({ loadingInd: true });
      const button = await getButtonById(id);
      set({ randomButton: button });
    } catch (error) {
      console.error("Error en la store:", error);
      set({ randomButton: null });
    } finally {
      set({ loadingInd: false });
    }
  },
  resetButton: () => {
    set({ button: null });
  },
}));

export default useButtonsStore;
