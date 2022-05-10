import { ThreeEvent, useLoader } from "@react-three/fiber";
import { FunctionComponent, Suspense, useEffect, useState } from "react";
import GltfModelLoadHelper from "../util/GltfModelLoadHelper";
import { ModelName } from "../util/ModelName";
import useSelectedModelNameStore from "../../util/store/SelectModelStore";
import { Object3D } from "three";
import { hoverChangeMaterial } from "../util/Interactions/HoverMaterial";
import HoverInfoPanel from "../util/HoverInfoPanel";
import RhinoModelLoadHelper from "../util/RhinoModelLoadHelper";

const SkipHouse: FunctionComponent = () => {
  const selectedModelName = useSelectedModelNameStore(
    (state) => state.selectedModelName
  );
  const setSelectedModelName = useSelectedModelNameStore(
    (state) => state.setSelectedModelName
  );

  // Minimal model
  const skipHousePath = "../../models/world/skip_House.min.3dm";
  // const skipHousePath = "../../models/world/skip_House.min.glb";
  const skipHouseMinName: ModelName = "skipHouseMin";
  const skipHouseMin = RhinoModelLoadHelper(skipHousePath, skipHouseMinName);
  // const skipHouseMin = GltfModelLoadHelper(skipHousePath, skipHouseMinName);

  const [skipHouseObj, setSkipHouseOjb] = useState(skipHouseMin);

  // Detail model
  // const skipHouseDetailPath = "../../models/detail/skip_house_com.glb";
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
        ></primitive>
        <HoverInfoPanel
          position={[55, 25, 35]}
          hover={hover}
          isSelected={isSelected}
          projectNo="A-0121"
          projectName="SKIP_HOUSE"
        />
      </Suspense>
    </>
  );
};
export default SkipHouse;
