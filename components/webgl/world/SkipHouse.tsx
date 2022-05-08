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
      if (hover) {
        (skipHouseObj as Object3D).traverse((child) => {
          if (child! instanceof Mesh) {
            const material = child.material;
            child.userData.savedMaterial = material;
            child.material = new MeshStandardMaterial({
              color: "#808080",
            });
          }
        });
      } else {
        (skipHouseObj as Object3D).traverse((child) => {
          if (child instanceof Mesh && child.userData.savedMaterial) {
            const savedMaterial = child.userData.savedMaterial;
            child.material = savedMaterial;
          }
        });
      }
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
