import { Object3DNode, ThreeEvent, useLoader } from "@react-three/fiber";
import {
  FunctionComponent,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import GltfModelLoadHelper from "../util/GltfModelLoadHelper";
import { ModelName, ModelNameEnum } from "../util/ModelName";
import useSelectedModelNameStore from "../../util/store/SelectModelStore";
import { Object3D } from "three";
import { hoverChangeMaterial } from "../util/Interactions/HoverMaterial";
import HoverInfoPanel from "../util/HoverInfoPanel";
import RhinoModelLoadHelper from "../util/RhinoModelLoadHelper";

// Params
export const skipHouseCamPos = {
  x: 45,
  y: 1,
  z: 50,
};

export const skipHouseConTarget = {
  ...skipHouseCamPos,
  z: skipHouseCamPos.z - 1,
};

const SkipHouse: FunctionComponent = () => {
  // Store
  const selectedModelName = useSelectedModelNameStore(
    (state) => state.selectedModelName
  );
  const setSelectedModelName = useSelectedModelNameStore(
    (state) => state.setSelectedModelName
  );
  const hoveredModel = useSelectedModelNameStore((state) => state.hoveredModel);
  const setHoveredModel = useSelectedModelNameStore(
    (state) => state.setHoveredModel
  );

  // Minimal model
  const skipHousePath = "../../models/world/skip_House.min.3dm";
  const skipHouseMinName: ModelName = "skipHouseMin";
  const skipHouseMinEnum = ModelNameEnum.skipHouseMin;
  const skipHouseMin = RhinoModelLoadHelper(skipHousePath, skipHouseMinName);

  const [skipHouseObj, setSkipHouseOjb] = useState(skipHouseMin);

  // Detail model
  const skipHouseDetailPath = "../../models/detail/skip_house_com.glb";
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
  }, [isSelected, skipHouseDetail, skipHouseMin]);

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
  const ref = useRef<Object3DNode<Object3D, Event>>();

  return (
    <>
      <Suspense fallback={null}>
        <primitive
          ref={ref}
          object={skipHouseObj}
          onClick={handleClick}
          onPointerOver={() => setHoveredModel(ref)}
          onPointerOut={() => setHoveredModel(null)}
        ></primitive>
        <HoverInfoPanel
          position={[55, 25, 35]}
          hover={hoveredModel && hoveredModel.current.name === skipHouseMinName}
          // hover={hoveredModel}
          isSelected={isSelected}
          projectNo="A-0121"
          projectName="SKIP_HOUSE"
        />
      </Suspense>
    </>
  );
};
export default SkipHouse;
