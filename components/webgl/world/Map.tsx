import { memo, Suspense } from "react";
import RhinoModelLoadHelper from "../util/RhinoModelLoadHelper";

const Map = memo(() => {
  const worldMapPath = "../../models/world/world_map.3dm";
  const worldMapObj = RhinoModelLoadHelper(worldMapPath);
  return (
    <Suspense fallback={null}>
      <primitive object={worldMapObj} />
    </Suspense>
  );
});

Map.displayName = "Map";

export default Map;
