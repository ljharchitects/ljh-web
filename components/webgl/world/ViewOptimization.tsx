import { ThreeEvent } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Object3D } from "three";
import useSelectedModelNameStore from "../../util/store/SelectModelStore";
import GltfModelLoadHelper from "../util/GltfModelLoadHelper";
import HoverInfoPanel from "../util/HoverInfoPanel";
import { hoverChangeMaterial } from "../util/Interactions/HoverMaterial";
import { ModelName } from "../util/ModelName";
import FutsalPlayGround from "./FutsalPlayGround";

// Params
export const viewOptimizationCamPos = {
  x: -58,
  y: 10,
  z: -100,
};

export const viewOptimizationTarget = {
  ...viewOptimizationCamPos,
  x: viewOptimizationCamPos.x - 1,
  y: viewOptimizationCamPos.y - 0.5,
  z: viewOptimizationCamPos.z - 1,
};

const ViewOptimization = () => {
  // const OceanRndPath = "../../models/world/world_ocean_rnd_min.glb";
  const ViewOptimizationPath = "../../models/world/view_optimization.glb";
  const ViewOptimizationName: ModelName = "ViewOptimizationMin";
  const ViewOptimizationObj = GltfModelLoadHelper(
    ViewOptimizationPath,
    ViewOptimizationName
  );
  ViewOptimizationObj.position.set(-90, 0, -130);

  const selectedModelName = useSelectedModelNameStore(
    (state) => state.selectedModelName
  );
  const setSelectedModelName = useSelectedModelNameStore(
    (state) => state.setSelectedModelName
  );

  const isSelected = selectedModelName === ViewOptimizationName;

  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (!isSelected) {
      hoverChangeMaterial(hover, ViewOptimizationObj as Object3D);
    }
  });

  // const isSelected = selectedModelName === skipHouseMinName;
  useEffect(() => {
    if (isSelected) {
      // 선택 됐을때
      // setSkipHouseOjb(skipHouseDetail);
    } else {
      // setSkipHouseOjb(skipHouseMin);
    }
  }, [isSelected]);

  const handleClick = (e: ThreeEvent<Event>) => {
    if ((ViewOptimizationObj as Object3D).name === ViewOptimizationName) {
      setSelectedModelName(e.eventObject.name);
    }
  };

  return (
    <>
      <Suspense fallback={null}>
        <primitive
          onClick={handleClick}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          object={ViewOptimizationObj}
        />
        <FutsalPlayGround position={[-102, 0, -80]} />
        <FutsalPlayGround position={[-77, 0, -80]} />
        <FutsalPlayGround position={[-52, 0, -80]} />
        <FutsalPlayGround position={[-27, 0, -80]} />
        <FutsalPlayGround
          position={[-37, 0, -120]}
          rotation={[0, Math.PI / 2, 0]}
        />
        {/* <FutsalPlayGround position={[30, 0, -50]} /> */}
        <HoverInfoPanel
          position={[-75, 35, -110]}
          hover={hover}
          isSelected={isSelected}
          projectNo="A-0322"
          projectName="View_Optimization"
        />
      </Suspense>
    </>
  );
};

export default ViewOptimization;
