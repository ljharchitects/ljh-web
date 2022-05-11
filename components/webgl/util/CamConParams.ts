import * as THREE from "three";
import gsap from "gsap";
import { RefObject } from "react";
import type { PerspectiveCamera as PerspectiveCameraImpl } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

export const worldCamParams = {
  near: 0.01,
  far: 3000,
};

export const worldConParams = {
  minPolarAngle: Math.PI / 4,
  maxPolarAngle: Math.PI / 2,
  autoRotate: true,
  autoRotateSpeed: -0.1,
  enableRotate: true,
  enableDamping: false,
  enableZoom: true,
};

export const firstPersonConParams = {
  maxPolarAngle: Math.PI,
  enableDamping: false,
  enableZoom: false,
  minDistance: 1,
};

const defaultGsapParams = {
  duration: 2,
  delay: 0.5,
  ease: "expo",
};

type Postition = {
  x: number;
  y: number;
  z: number;
};

export const camConTransitionParams = (
  camRef: RefObject<PerspectiveCameraImpl>,
  conRef: RefObject<OrbitControlsImpl>,
  camPostition: Postition,
  conTarget: Postition,
  fov = 40
) => {
  if (camRef.current && conRef.current) {
    return (
      gsap.to(camRef.current, {
        ...defaultGsapParams,
        fov: fov,
        onUpdate: () => {
          camRef.current?.updateProjectionMatrix();
        },
      }),
      gsap.to(camRef.current.position, {
        ...defaultGsapParams,
        ...camPostition,
      }),
      gsap.to(conRef.current.target, {
        ...defaultGsapParams,
        ...conTarget,
      })
    );
  }
};

type directionType = {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
};

export const movePosition = (
  camRef: RefObject<PerspectiveCameraImpl>,
  conRef: RefObject<OrbitControlsImpl>,
  directionInput: directionType,
  joystickForBackwardVal: number,
  joystickLeftRightVal: number,
  joystickUpDownVal: number,
  delta: number
) => {
  if (!camRef.current || !conRef.current) {
    return;
  }

  let speed = 100;
  let velocity = new THREE.Vector3();
  let direction = new THREE.Vector3();

  velocity.z -= velocity.z * delta * 10;
  velocity.x -= velocity.x * delta * 10;
  velocity.y -= velocity.y * delta * 10;

  direction.z =
    Number(directionInput.forward) - Number(directionInput.backward);
  direction.x = Number(directionInput.right) - Number(directionInput.left);
  direction.y = Number(directionInput.up) - Number(directionInput.down);
  direction.normalize();

  if (directionInput.forward || directionInput.backward) {
    velocity.z += direction.z * speed * delta;
  }
  if (directionInput.left || directionInput.right) {
    velocity.x += direction.x * speed * delta;
  }
  if (directionInput.up || directionInput.down || joystickUpDownVal) {
    velocity.y += direction.y * speed * delta;
    if (conRef.current.target.y >= 0.5 && camRef.current.position.y >= 0.5) {
      conRef.current.target.y += velocity.y * delta - joystickUpDownVal / 1000;
      camRef.current.position.y +=
        velocity.y * delta - joystickUpDownVal / 1000;
    } else {
      conRef.current.target.y = 0.5;
      camRef.current.position.y = 0.5;
    }
  }
  // console.log(`velocity.z * delta : ${velocity.z * delta}`);
  moveForBackwardPosition(
    velocity.z * delta - joystickForBackwardVal / 1000,
    camRef,
    conRef
  );
  moveLeftRightPosition(
    velocity.x * delta + joystickLeftRightVal / 1000,
    camRef,
    conRef
  );
};

const moveForBackwardPosition = (
  dist: number,
  camRef: RefObject<PerspectiveCameraImpl>,
  conRef: RefObject<OrbitControlsImpl>
) => {
  if (!camRef.current || !conRef.current) {
    return;
  }
  let vec = new THREE.Vector3();
  vec.setFromMatrixColumn(camRef.current.matrix, 0);
  vec.crossVectors(camRef.current.up, vec);
  camRef.current.position.addScaledVector(vec, dist);
  conRef.current.target.addScaledVector(vec, dist);
};

const moveLeftRightPosition = (
  dist: number,
  camRef: RefObject<PerspectiveCameraImpl>,
  conRef: RefObject<OrbitControlsImpl>
) => {
  if (!camRef.current || !conRef.current) {
    return;
  }
  let vec = new THREE.Vector3();
  vec.setFromMatrixColumn(camRef.current.matrix, 0);
  camRef.current.position.addScaledVector(vec, dist);
  conRef.current.target.addScaledVector(vec, dist);
};
