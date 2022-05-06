import { ThreeEvent } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { FunctionComponent, memo, Suspense, useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import RhinoModelLoadHelper from "../util/RhinoModelLoadHelper";
import GltfModelLoadHelper from "../util/GltfModelLoadHelper";

import { ModelName } from "../util/ModelName";
import { Object3D } from "three";

type Props = {
  selectedModelName: string;
  handleClick: (e: ThreeEvent<MouseEvent>) => void;
};

const SkipHouse: FunctionComponent<Props> = memo(
  ({ selectedModelName, handleClick }) => {
    const skipHousePath = "../../models/world/skip_House.min.3dm";
    const skipHouseMinName: ModelName = "skipHouseMin";
    const skipHouseMin = RhinoModelLoadHelper(skipHousePath, skipHouseMinName);

    const [skipHouseObj, setSkipHouseOjb] = useState(skipHouseMin);

    const skipHouseDetailPath = "../../models/detail/skip_house.glb";
    // const skipHouseDetail = useLoader(GLTFLoader, skipHouseDetailPath).scene;
    const skipHouseDetailName: ModelName = "skipHouseDetail";
    const skipHouseDetail = GltfModelLoadHelper(
      skipHouseDetailPath,
      skipHouseDetailName
    );
    // skipHouseDetail.name = skipHouseDetailName;

    const isSelected = selectedModelName === skipHouseMinName;
    useEffect(() => {
      if (isSelected) {
        console.log("selected!");
        setSkipHouseOjb(skipHouseDetail);
      } else {
        setSkipHouseOjb(skipHouseMin);
      }
    }, [isSelected]);
    // TODO : Hover over
    // const skipHouseRef = useRef<THREE.Object3D>();
    // const [hovered, setHover] = useState(false);
    return (
      <>
        <Suspense>
          <primitive
            // object={skipHouseMin}
            object={skipHouseObj}
            // object={isSelected ? skipHouseDetail : skipHouseMin}
            onClick={handleClick}
            // onClick={() => setActive(!active)}
            // onPointerOver={() => setHover(true)}
            // onPointerOut={() => setHover(false)}
          />
        </Suspense>
      </>
    );
  }
);
SkipHouse.displayName = "SkipHouse";
export default SkipHouse;
