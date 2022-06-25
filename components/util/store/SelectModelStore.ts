import create, { State } from "zustand";
import * as THREE from "three";
import { MutableRefObject } from "react";
import { Object3DNode } from "@react-three/fiber";
import { Object3D } from "three";

type hoveredModel = MutableRefObject<
  Object3DNode<Object3D<Event>, Event> | undefined
> | null;

interface selectedModelState extends State {
  selectedModelName: string;
  hoveredModel: hoveredModel;
  setSelectedModelName: (name: string) => void;
  setHoveredModel: (model: hoveredModel) => void;
}

export const useSelectedModelNameStore = create<selectedModelState>((set) => ({
  selectedModelName: "",
  hoveredModel: null,
  setSelectedModelName: (name) => set((state) => ({ selectedModelName: name })),
  setHoveredModel: (model) => set((state) => ({ hoveredModel: model })),
}));

export default useSelectedModelNameStore;
