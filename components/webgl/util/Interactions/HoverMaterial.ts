import { Mesh, Object3D } from "three";
import * as THREE from "three";

const hoverChangeMaterial = (hover: boolean, targetObject: Object3D) => {
  if (hover) {
    targetObject.traverse((child) => {
      if (child instanceof Mesh) {
        if (child.userData.savedMaterial) {
          child.material.color.setHex(child.userData.savedMaterial - 0x101010);
          // child.material.color.setHex(0xe0e0e0);
          child.material.blending = THREE.NormalBlending;
        } else {
          child.userData.savedMaterial = child.material.color.getHex();
          child.material.color.setHex(child.userData.savedMaterial - 0x101010);
          // child.material.color.setHex(0xe0e0e0);
          // console.log(child.material.blending);
          // child.material.blending = THREE.AdditiveBlending;
          // child.material.blending = THREE.CustomBlending;
          // child.material.blendEquation = THREE.AddEquation;
          // child.material.blendSrc = THREE.SrcColorFactor;
          // child.material.blendDst = THREE.ZeroFactor;
        }
      }
    });
  } else {
    targetObject.traverse((child) => {
      if (child instanceof Mesh && child.userData.savedMaterial) {
        // if (child instanceof Mesh && child.userData.savedMaterial) {
        // if (child instanceof Mesh) {
        const hex = child.userData.savedMaterial;
        child.material.color.setHex(hex);
        // child.material.blending = THREE.NoBlending;
      }
    });
  }
};

export { hoverChangeMaterial };
