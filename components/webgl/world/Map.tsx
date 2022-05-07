import { Suspense } from "react";
import RhinoModelLoadHelper from "../util/RhinoModelLoadHelper";

const Map = () => {
  const worldMapPath = "../../models/world/world_map.3dm";
  const worldMapObj = RhinoModelLoadHelper(worldMapPath);
  return (
    <Suspense fallback={null}>
      <primitive object={worldMapObj} />
    </Suspense>
  );
};

export default Map;
