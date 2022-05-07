import { FunctionComponent, Suspense } from "react";
import { ModelName } from "../util/ModelName";
import RhinoModelLoadHelper from "../util/RhinoModelLoadHelper";

const OceanRnd: FunctionComponent = () => {
  const OceanRndPath = "../../models/world/world_ocean_rnd.3dm";
  const OceanRndName: ModelName = "oceanRndMin";
  const OceanRndObj = RhinoModelLoadHelper(OceanRndPath, OceanRndName);
  return (
    <>
      <Suspense fallback={null}>
        <primitive object={OceanRndObj} />
      </Suspense>
    </>
  );
};

export default OceanRnd;
