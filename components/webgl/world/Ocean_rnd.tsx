import { FunctionComponent, Suspense, useEffect, useState } from "react";
import { Object3D } from "three";
import useSelectedModelNameStore from "../../util/store/SelectModelStore";
import GltfModelLoadHelper from "../util/GltfModelLoadHelper";
import HoverInfoPanel from "../util/HoverInfoPanel";
import { hoverChangeMaterial } from "../util/Interactions/HoverMaterial";
import { ModelName } from "../util/ModelName";
import RhinoModelLoadHelper from "../util/RhinoModelLoadHelper";

const OceanRnd: FunctionComponent = () => {
  const OceanRndPath = "../../models/world/world_ocean_rnd_min.glb";
  // const OceanRndPath = "../../models/world/world_ocean_rnd.glb";
  const OceanRndName: ModelName = "oceanRndMin";
  const OceanRndObj = GltfModelLoadHelper(OceanRndPath, OceanRndName);

  const selectedModelName = useSelectedModelNameStore(
    (state) => state.selectedModelName
  );

  const isSelected = selectedModelName === OceanRndName;

  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (!isSelected) {
      hoverChangeMaterial(hover, OceanRndObj as Object3D);
    }
  });
  return (
    <>
      <Suspense fallback={null}>
        <primitive
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          object={OceanRndObj}
        />
        <HoverInfoPanel
          position={[80, 40, -80]}
          hover={hover}
          isSelected={isSelected}
          projectNo="A-0220"
          projectName="해양생태과학관"
        />
      </Suspense>
    </>
  );
};

export default OceanRnd;
