import { create } from "zustand";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Author {
  id: number;
  name: string;
  githubUrl: string;
  imageUrl: string;
}

interface State {
  authors: Author[];
  author: Author | null;
  getAuthors: () => void;
  getAuthorById: (id: string) => void;
  resetAuthor: () => void;
}

const getAuthors = async () => {
  try {
    let url = `${API_URL}authors`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Error al obtener autores:", error);
    throw error;
  }
};

const getAuthorById = async (id: string) => {
  try {
    let url = `${API_URL}authors/${id}`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Error al obtener el autor:", error);
    throw error;
  }
};

const useAuthorsStore = create<State>((set) => ({
  authors: [],
  author: null,
  getAuthors: async () => {
    try {
      const buttons = await getAuthors();
      set({ authors: buttons });
    } catch (error) {
      console.error("Error en la store: ", error);
    }
  },
  getAuthorById: async (id: string) => {
    try {
      const button = await getAuthorById(id);
      set({ author: button });
    } catch (error) {
      console.error("Error en la store:", error);
      set({ author: null });
    }
  },
  resetAuthor: () => {
    set({ author: null });
  },
}));

export default useAuthorsStore;
