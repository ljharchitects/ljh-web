import create, { State } from "zustand";

interface selectedModelState extends State {
  selectedModelName: string;
  setSelectedModelName: (name: string) => void;
}

export const useSelectedModelNameStore = create<selectedModelState>((set) => ({
  selectedModelName: "",
  setSelectedModelName: (name) => set((state) => ({ selectedModelName: name })),
}));

export default useSelectedModelNameStore;
