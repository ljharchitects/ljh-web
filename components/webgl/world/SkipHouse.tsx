import { ThreeEvent } from "@react-three/fiber";
import {
  Children,
  FunctionComponent,
  Suspense,
  useEffect,
  useState,
} from "react";
import RhinoModelLoadHelper from "../util/RhinoModelLoadHelper";
import GltfModelLoadHelper from "../util/GltfModelLoadHelper";
import { ModelName } from "../util/ModelName";
import useSelectedModelNameStore from "../../util/store/SelectModelStore";
import { Material, Mesh, MeshStandardMaterial, Object3D } from "three";
import { hoverChangeMaterial } from "../util/Interactions/HoverMaterial";

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

  // TODO : Hover over
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (!isSelected) {
      const hoverMaterial = new MeshStandardMaterial({ color: "#808080" });
      hoverChangeMaterial(hover, skipHouseObj as Object3D);
    }
  });
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
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          {/* <meshStandardMaterial color={"#ff0000"} transparent opacity={0.5} /> */}
        </primitive>
      </Suspense>
    </>
  );
};
export default SkipHouse;
