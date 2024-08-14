import { create } from "zustand";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Button {
  id: number;
  categoria: string;
  tamano: string;
  estilo: string;
  htmlCode: string;
  cssCode: string;
  tailwindCode: string;
}

interface State {
  buttons: Button[];
  getButtons: (categoria?: string, tamano?: string, estilo?: string) => void;
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

const useButtonsStore = create<State>((set) => ({
  buttons: [],
  getButtons: async (categoria?: string, tamano?: string, estilo?: string) => {
    try {
      const buttonsFiltered = await getButtons(categoria, tamano, estilo);
      set({ buttons: buttonsFiltered });
    } catch (error) {
      console.error("Error en el store:", error);
    }
  },
}));

export default useButtonsStore;
