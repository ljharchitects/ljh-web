import { Mesh, MeshStandardMaterial, Object3D } from "three";

const hoverChangeMaterial = (
  hover: boolean,
  targetObject: Object3D,
  targetMaterial: MeshStandardMaterial
) => {
  if (hover) {
    targetObject.traverse((child) => {
      if (child instanceof Mesh) {
        const material = child.material;
        child.userData.savedMaterial = material;
        child.material = targetMaterial;
      }
    });
  } else {
    targetObject.traverse((child) => {
      if (child instanceof Mesh && child.userData.savedMaterial) {
        const savedMaterial = child.userData.savedMaterial;
        child.material = savedMaterial;
      }
    });
  }
};

export { hoverChangeMaterial };
