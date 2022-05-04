import { ThreeEvent } from "@react-three/fiber";
import { RefObject } from "react";
import { Event, Object3D } from "three";

export interface Ipost {
  slug: string;
  frontmatter: Ifrontmatter;
}

export interface Ifrontmatter {
  title: string;
  date: Date;
  excerpt: string;
  cover_image: string;
}

export interface IpostPage {
  frontmatter: Ifrontmatter;
  slug: string;
  content: string;
}

export type loaderType = "rhino3dm" | "gltf";

export interface IinteractionObj {
  selectedModelRef: RefObject<Object3D<Event>>;
  isFirstPersonMode: boolean;
  handleClick?: ThreeEvent<MouseEvent>;
  handleKeyDown?: KeyboardEvent;
}

export interface IpersCamera {
  fov?: number;
  near?: number;
  far?: number;
  position?: THREE.Vector3;
}

export interface IorbitControl {
  maxPolarAngle: number;
  minPolarAngle?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  enableRotate?: boolean;
  target?: THREE.Vector3;
  enableDamping?: boolean;
  enableZoom?: boolean;
}

// maxPolarAngle: Math.PI,
//   enableZoom: false,
//   minDistance: 1,
