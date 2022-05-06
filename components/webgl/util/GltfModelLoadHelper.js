import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export const GltfModelLoadHelper = (path, name = path) => {
  const modelObj = useLoader(GLTFLoader, path).scene;

  modelObj.castShadow = true;
  modelObj.receiveShadow = true;
  modelObj.name = name
  console.log("gltf model load helper")
  return modelObj;
};

export default GltfModelLoadHelper;
