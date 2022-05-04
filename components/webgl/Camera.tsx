import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import type { PerspectiveCamera as PerspectiveCameraImpl } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import {
  useEffect,
  useRef,
  useState,
  FunctionComponent,
  Dispatch,
  SetStateAction,
} from "react";
import {
  worldCamParams,
  worldConParams,
  firstPersonConParams,
  skipHouseTransitionParams,
  worldTransitionParams,
  movePosition,
} from "./util/CamConParams";
import { ModelName } from "./util/ModelName";
import { IorbitControl, IpersCamera } from "../../types";
import { useFrame } from "@react-three/fiber";

type Props = {
  selectedModelName: string;
  directionInput: {
    forward: boolean;
    backward: boolean;
    left: boolean;
    right: boolean;
    up: boolean;
    down: boolean;
  };
  prevTime: number;
  setPrevTime: Dispatch<SetStateAction<number>>;
};

const Camera: FunctionComponent<Props> = ({
  selectedModelName,
  directionInput,
  prevTime,
  setPrevTime,
}) => {
  const [camParams, setCamParams] = useState<IpersCamera>(worldCamParams);
  const [conParams, setConParams] = useState<IorbitControl>(worldConParams);

  const camRef = useRef<PerspectiveCameraImpl>(null);
  const conRef = useRef<OrbitControlsImpl>(null);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const skipHouseMinName: ModelName = "skipHouseMin";

  // AUTO ROTATE
  const handleStopRotate = () => {
    setIsAutoRotate(false);
  };
  useEffect(() => {
    if (conRef.current) {
      document.addEventListener("click", handleStopRotate);
      return () => {
        document.removeEventListener("click", handleStopRotate);
      };
    }
  });

  // TRANSITION
  useEffect(() => {
    switch (selectedModelName) {
      case skipHouseMinName:
        setConParams(firstPersonConParams);
        skipHouseTransitionParams(camRef, conRef);
        break;

      default:
        setConParams(worldConParams);
        worldTransitionParams(camRef, conRef);
        setIsAutoRotate(true);
        break;
    }
  }, [selectedModelName]);
  useFrame(() => {
    // if (!camRef.current || !conRef.current) {
    //   return;
    // }
    movePosition(camRef, conRef, directionInput, prevTime, setPrevTime);
  });
  return (
    <>
      <PerspectiveCamera ref={camRef} makeDefault {...camParams} />
      <OrbitControls ref={conRef} {...conParams} autoRotate={isAutoRotate} />
    </>
  );
};

export default Camera;
