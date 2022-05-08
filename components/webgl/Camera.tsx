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
import useSelectedModelNameStore from "../util/store/SelectModelStore";
import { Interaction } from "./util/Interactions/CameraMove";
import { useJoystickMoveStore } from "../util/store/JoystickMoveStore";
// import { JoystickController } from "./util/Interactions/JoystickController";

const Camera: FunctionComponent = () => {
  const selectedModelName = useSelectedModelNameStore(
    (state) => state.selectedModelName
  );

  const { directionInput } = Interaction();
  // JoystickController();
  // const { moveStick, updownStick } = JoystickController();
  // console.log(moveStick);

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

  const joystickForBackwardVal = useJoystickMoveStore(
    (state) => state.joystickForBackwardVal
  );
  const joystickLeftRightVal = useJoystickMoveStore(
    (state) => state.joystickLeftRightVal
  );
  const joystickUpDownVal = useJoystickMoveStore(
    (state) => state.joystickUpDownVal
  );

  useFrame((state, delta, xrFrame) => {
    if (!camRef.current || !conRef.current) {
      return;
    }

    movePosition(
      camRef,
      conRef,
      directionInput,
      joystickForBackwardVal,
      joystickLeftRightVal,
      joystickUpDownVal,
      delta
    );
  });
  return (
    <>
      <PerspectiveCamera ref={camRef} makeDefault {...worldCamParams} />
      <OrbitControls ref={conRef} {...conParams} autoRotate={isAutoRotate} />
    </>
  );
};

export default Camera;
