import { ThreeEvent } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { FunctionComponent, Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ModelName } from "../util/ModelName";

type Props = {
  handleClick: (e: ThreeEvent<MouseEvent>) => void;
};

const OceanRnd: FunctionComponent<Props> = ({ handleClick }) => {
  const OceanRndPath = "../../models/detail/ocean_rnd.glb";
  const OceanRndObj = useLoader(GLTFLoader, OceanRndPath).scene;
  const OceanRndName: ModelName = "oceanRndMin";
  OceanRndObj.name = OceanRndName;
  OceanRndObj.castShadow = true;
  OceanRndObj.receiveShadow = true;
  return (
    <>
      <Suspense fallback={null}>
        <primitive object={OceanRndObj} onClick={handleClick} />
      </Suspense>
    </>
  );
};

export default OceanRnd;