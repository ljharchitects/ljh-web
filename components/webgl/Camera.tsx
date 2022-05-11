import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import type { PerspectiveCamera as PerspectiveCameraImpl } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useEffect, useRef, useState, FunctionComponent } from "react";
import {
  worldCamParams,
  worldConParams,
  firstPersonConParams,
  movePosition,
  camConTransitionParams as setCamConTransition,
} from "./util/CamConParams";
import { ModelName } from "./util/ModelName";
import { IorbitControl } from "../../types";
import { useFrame } from "@react-three/fiber";
import useSelectedModelNameStore from "../util/store/SelectModelStore";
import { Interaction } from "./util/Interactions/CameraMove";
import { useJoystickMoveStore } from "../util/store/JoystickMoveStore";
import { skipHouseCamPos, skipHouseConTarget } from "./world/SkipHouse";
import {
  viewOptimizationCamPos,
  viewOptimizationTarget,
} from "./world/ViewOptimization";
// import { JoystickController } from "./util/Interactions/JoystickController";

const worldCamPos = {
  x: -110,
  y: 150,
  z: 200,
};

const worldConTarget = {
  x: 0,
  y: 0,
  z: 0,
};

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
  const skipHouseMinName: ModelName = "skipHouseMin";
  const ViewOptimizationName: ModelName = "ViewOptimizationMin";
  useEffect(() => {
    switch (selectedModelName) {
      case skipHouseMinName:
        setConParams(firstPersonConParams);
        setCamConTransition(
          camRef,
          conRef,
          skipHouseCamPos,
          skipHouseConTarget,
          100
        );
        break;
      case ViewOptimizationName:
        setCamConTransition(
          camRef,
          conRef,
          viewOptimizationCamPos,
          viewOptimizationTarget,
          70
        );
        break;

      default:
        setConParams(worldConParams);
        setCamConTransition(camRef, conRef, worldCamPos, worldConTarget);
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
