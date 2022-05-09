import {
  DoubleSide,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  RawShaderMaterial,
} from "three";

const hoverChangeMaterial = (hover: boolean, targetObject: Object3D) => {
  if (hover) {
    targetObject.traverse((child) => {
      if (child instanceof Mesh) {
        if (child.userData.savedMaterial) {
          child.material.color.setHex(0x999999);
        } else {
          child.userData.savedMaterial = child.material.color.getHex();
          child.material.color.setHex(0x999999);
        }
      }
    });
  } else {
    targetObject.traverse((child) => {
      if (child instanceof Mesh && child.userData.savedMaterial) {
        const hex = child.userData.savedMaterial;
        child.material.color.setHex(hex);
      }
    });
  }
};

export { hoverChangeMaterial };
