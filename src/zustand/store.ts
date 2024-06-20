import { create } from "zustand";

interface FilesState {
  files: File[] | null;
  addFiles: (files: File[] | null) => void;
}

export const useFileStore = create<FilesState>((set) => ({
  files: null,
  addFiles: (files) =>
    set((state) => {
      if (state.files && files) {
        return { files: [...state.files, ...files] };
      } else {
        return { files };
      }
    }),
}));
