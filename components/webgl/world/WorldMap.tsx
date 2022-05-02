import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Map = () => {
  const worldMapPath = "../../models/world/world_map.glb";
  const worldMap = useLoader(GLTFLoader, worldMapPath);
  return (
    <Suspense fallback={null}>
      <primitive object={worldMap.scene} />
    </Suspense>
  );
};

export default Map;
