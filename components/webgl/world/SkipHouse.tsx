import { ThreeEvent } from "@react-three/fiber";
import { FunctionComponent, Suspense, useEffect, useState } from "react";
import RhinoModelLoadHelper from "../util/RhinoModelLoadHelper";
import GltfModelLoadHelper from "../util/GltfModelLoadHelper";
import { ModelName } from "../util/ModelName";
import useSelectedModelNameStore from "../../util/store/SelectModelStore";
import { Object3D } from "three";

const SkipHouse: FunctionComponent = () => {
  const { selectedModelName, setSelectedModelName } =
    useSelectedModelNameStore();

  const skipHousePath = "../../models/world/skip_House.min.3dm";
  const skipHouseMinName: ModelName = "skipHouseMin";
  const skipHouseMin = RhinoModelLoadHelper(skipHousePath, skipHouseMinName);

  const [skipHouseObj, setSkipHouseOjb] = useState(skipHouseMin);

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

  // TODO : Hover over
  return (
    <>
      <Suspense>
        <primitive
          object={skipHouseObj}
          onClick={
            (skipHouseObj as Object3D).name === skipHouseMinName
              ? (e: ThreeEvent<Event>) =>
                  setSelectedModelName(e.eventObject.name)
              : null
          }
        />
      </Suspense>
    </>
  );
};
export default SkipHouse;
