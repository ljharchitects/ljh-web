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
  memo,
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
};

const Camera: FunctionComponent<Props> = memo(
  ({ selectedModelName, directionInput }) => {
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
      // console.log(state);
      if (!camRef.current || !conRef.current) {
        return;
      }
      // console.log(delta);
      movePosition(camRef, conRef, directionInput, delta);
    });
    return (
      <>
        <PerspectiveCamera ref={camRef} makeDefault {...worldCamParams} />
        <OrbitControls ref={conRef} {...conParams} autoRotate={isAutoRotate} />
      </>
    );
  }
);

Camera.displayName = "Camera";

export default Camera;
