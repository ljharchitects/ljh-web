import { useLoader } from "@react-three/fiber";
import { Rhino3dmLoader } from "three/examples/jsm/loaders/3DMLoader";

export const RhinoModelLoader = (path: string) => {
  const modelObj = useLoader(Rhino3dmLoader, path, (loader) => {
    loader.setLibraryPath("https://cdn.jsdelivr.net/npm/rhino3dm@7.14.0/");
  });

  modelObj.castShadow = true;
  modelObj.receiveShadow = true;
  modelObj.rotation.x = -Math.PI / 2;
  return modelObj;
};

export default RhinoModelLoader;
