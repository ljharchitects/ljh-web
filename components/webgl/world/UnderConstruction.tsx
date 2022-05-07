import { useFrame, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const UnderConstruction = () => {
  const underConstructionPath = "../../models/world/construction.glb";
  const UnderConstructionObj = useLoader(GLTFLoader, underConstructionPath);

  let mixer: THREE.AnimationMixer;
  if (UnderConstructionObj.animations.length) {
    mixer = new THREE.AnimationMixer(UnderConstructionObj.scene);
    const currentAction = mixer.clipAction(UnderConstructionObj.animations[0]);
    currentAction.play();
  }
  useFrame((state, delta) => {
    mixer.update(delta * 0.2);
  });
  return (
    <>
      <Suspense fallback={null}>
        <primitive object={UnderConstructionObj.scene} />
      </Suspense>
    </>
  );
};

export default UnderConstruction;
