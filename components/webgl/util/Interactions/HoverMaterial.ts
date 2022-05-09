import {
  DoubleSide,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  RawShaderMaterial,
} from "three";

const defaultMaterial = new RawShaderMaterial({
  depthWrite: false,
  depthTest: false,
  side: DoubleSide,
  vertexShader: `
    uniform mat4 projectionMatrix;
    uniform mat4 viewMatrix;
    uniform mat4 modelMatrix;

    attribute vec3 position;

    void main()
    {
      gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    precision mediump float;

    void main()
    {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
  `,
});

const hoverChangeMaterial = (
  hover: boolean,
  targetObject: Object3D,
  targetMaterial: MeshStandardMaterial | RawShaderMaterial = defaultMaterial
) => {
  if (hover) {
    targetObject.traverse((child) => {
      if (child instanceof Mesh) {
        if (child.userData.savedMaterial) {
          // child.material.color.setHex("#ff0000");
          child.material = targetMaterial;
        } else {
          // const material = child.material.color.getHex();
          const material = child.material;
          child.userData.savedMaterial = material;
          // child.material.color.setHex("#ff0000");
          child.material = targetMaterial;
        }
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
