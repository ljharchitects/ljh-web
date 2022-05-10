import { ThreeEvent } from "@react-three/fiber";
import { FunctionComponent, Suspense, useEffect, useState } from "react";
import RhinoModelLoadHelper from "../util/RhinoModelLoadHelper";
import GltfModelLoadHelper from "../util/GltfModelLoadHelper";
import { ModelName } from "../util/ModelName";
import useSelectedModelNameStore from "../../util/store/SelectModelStore";
import { Object3D } from "three";
import { hoverChangeMaterial } from "../util/Interactions/HoverMaterial";
import HoverInfoPanel from "../util/HoverInfoPanel";

const SkipHouse: FunctionComponent = () => {
  const selectedModelName = useSelectedModelNameStore(
    (state) => state.selectedModelName
  );
  const setSelectedModelName = useSelectedModelNameStore(
    (state) => state.setSelectedModelName
  );

  // Minimal model
  const skipHousePath = "../../models/world/skip_House.min.3dm";
  const skipHouseMinName: ModelName = "skipHouseMin";
  const skipHouseMin = RhinoModelLoadHelper(skipHousePath, skipHouseMinName);

  const [skipHouseObj, setSkipHouseOjb] = useState(skipHouseMin);

  // Detail model
  const skipHouseDetailPath = "../../models/detail/skip_house.glb";
  const skipHouseDetailName: ModelName = "skipHouseDetail";
  const skipHouseDetail = GltfModelLoadHelper(
    skipHouseDetailPath,
    skipHouseDetailName
  );

  const isSelected = selectedModelName === skipHouseMinName;
  useEffect(() => {
    if (isSelected) {
      setSkipHouseOjb(skipHouseDetail);
    } else {
      setSkipHouseOjb(skipHouseMin);
    }
  }, [isSelected]);

  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (!isSelected) {
      hoverChangeMaterial(hover, skipHouseObj as Object3D);
    }
  });

  const handleClick = (e: ThreeEvent<Event>) => {
    if ((skipHouseObj as Object3D).name === skipHouseMinName) {
      setSelectedModelName(e.eventObject.name);
    }
  };

  return (
    <>
      <Suspense fallback={null}>
        <primitive
          object={skipHouseObj}
          onClick={handleClick}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          <HoverInfoPanel
            position={[55, -35, 25]}
            hover={hover}
            isSelected={isSelected}
            projectNo="A-0121"
            projectName="SKIP_HOUSE"
          />
        </primitive>
      </Suspense>
    </>
  );
};
export default SkipHouse;
