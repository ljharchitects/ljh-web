import { ThreeEvent } from "@react-three/fiber";
import create, { State } from "zustand";

interface selectedModelState extends State {
  selectedModelName: string;
  setSelectedModelName: (name: string) => void;
}

const useSelectedModelNameStore = create<selectedModelState>((set) => ({
  selectedModelName: "",
  setSelectedModelName: (name) => set((state) => ({ selectedModelName: name })),
}));

export default useSelectedModelNameStore;
