import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import type { PerspectiveCamera as PerspectiveCameraImpl } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useEffect, useRef, useState, FunctionComponent } from "react";
import {
  worldCamParams,
  worldConParams,
  firstPersonConParams,
  skipHouseTransitionParams,
  worldTransitionParams,
  movePosition,
} from "./util/CamConParams";
import { ModelName } from "./util/ModelName";
import { IorbitControl } from "../../types";
import { useFrame } from "@react-three/fiber";
import useSelectedModelNameStore from "../util/Store";
import { Interaction } from "./util/Interactions/CameraMove";

const Camera: FunctionComponent = () => {
  const { selectedModelName } = useSelectedModelNameStore();

  const { directionInput } = Interaction();

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
  }, []);

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

  useFrame((state, delta, xrFrame) => {
    if (!camRef.current || !conRef.current) {
      return;
    }
    movePosition(camRef, conRef, directionInput, delta);
  });
  return (
    <>
      <PerspectiveCamera ref={camRef} makeDefault {...worldCamParams} />
      <OrbitControls ref={conRef} {...conParams} autoRotate={isAutoRotate} />
    </>
  );
};

export default Camera;
