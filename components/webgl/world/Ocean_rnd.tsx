import { Object3DNode } from "@react-three/fiber";
import { EffectComposer, Outline } from "@react-three/postprocessing";
import { FunctionComponent, Suspense, useRef } from "react";
import { Event, Object3D } from "three";
import useSelectedModelNameStore from "../../util/store/SelectModelStore";
import GltfModelLoadHelper from "../util/GltfModelLoadHelper";
import HoverInfoPanel from "../util/HoverInfoPanel";
import { ModelName } from "../util/ModelName";

const OceanRnd: FunctionComponent = () => {
  // const OceanRndPath = "../../models/world/world_ocean_rnd_min.glb";
  const OceanRndPath = "../../models/world/world_ocean_rnd.glb";
  const OceanRndName: ModelName = "oceanRndMin";
  const OceanRndObj = GltfModelLoadHelper(OceanRndPath, OceanRndName);

  const selectedModelName = useSelectedModelNameStore(
    (state) => state.selectedModelName
  );
  const hoveredModel = useSelectedModelNameStore((state) => state.hoveredModel);
  const setHoveredModel = useSelectedModelNameStore(
    (state) => state.setHoveredModel
  );

  const isSelected = selectedModelName === OceanRndName;

  const ref = useRef<Object3DNode<Object3D, Event>>();
  return (
    <>
      <Suspense fallback={null}>
        <primitive
          object={OceanRndObj}
          ref={ref}
          onPointerOver={() => setHoveredModel(ref)}
          onPointerOut={() => setHoveredModel(null)}
        />
      </Suspense>
      <HoverInfoPanel
        position={[80, 40, -80]}
        hover={hoveredModel && hoveredModel.current.name === OceanRndName}
        isSelected={isSelected}
        projectNo="A-0220"
        projectName="해양생태과학관"
      />
    </>
  );
};

export default OceanRnd;
