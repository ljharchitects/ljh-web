import { ThreeEvent } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { FunctionComponent, Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import RhinoModelLoader from "../util/RhinoModelLoader";
import { ModelName } from "../util/ModelName";

type Props = {
  selectedModelName: string;
  handleClick: (e: ThreeEvent<MouseEvent>) => void;
};

const SkipHouse: FunctionComponent<Props> = ({
  selectedModelName,
  handleClick,
}) => {
  const skipHousePath = "../../models/world/skip_House.min.3dm";
  const skipHouseMin = RhinoModelLoader(skipHousePath);
  const skipHouseMinName: ModelName = "skipHouseMin";
  skipHouseMin.name = skipHouseMinName;

  const skipHouseDetailPath = "../../models/detail/skip_house.glb";
  const skipHouseDetail = useLoader(GLTFLoader, skipHouseDetailPath).scene;
  const skipHouseDetailName: ModelName = "skipHouseDetail";
  skipHouseDetail.name = skipHouseDetailName;

  const isSelected = selectedModelName === skipHouseMinName;

  // TODO : Hover over
  // const skipHouseRef = useRef<THREE.Object3D>();
  // const [hovered, setHover] = useState(false);
  return (
    <>
      <Suspense>
        <primitive
          // object={skipHouseMin}
          object={isSelected ? skipHouseDetail : skipHouseMin}
          onClick={handleClick}
          // onClick={() => setActive(!active)}
          // onPointerOver={() => setHover(true)}
          // onPointerOut={() => setHover(false)}
        />
      </Suspense>
    </>
  );
};

export default SkipHouse;
