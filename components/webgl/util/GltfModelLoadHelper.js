import { useLoader } from "@react-three/fiber";
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export const GltfModelLoadHelper = (path, name = path) => {
  // const modelObj = useLoader(GLTFLoader, path).scene;
  const modelObj = useLoader(GLTFLoader, path,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      loader.setDRACOLoader(dracoLoader);
    }
  ).scene;

  modelObj.castShadow = true;
  modelObj.receiveShadow = true;
  modelObj.name = name
  modelObj.traverse((child) => {
    child.castShadow = true;
    child.receiveShadow = true;
    child.layers.enable(10)
  })
  return modelObj;
};

export default GltfModelLoadHelper;
