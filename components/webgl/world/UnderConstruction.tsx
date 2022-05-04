import { useFrame, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const UnderConstruction = () => {
  const underConstructionPath = "../../models/world/construction.glb";
  const UnderConstructionObj = useLoader(GLTFLoader, underConstructionPath);

  const animation = {
    mixer: THREE.AnimationMixer,
    actions: {
      rotation: THREE.AnimationAction,
      current: THREE.AnimationAction,
    },
  };

  if (UnderConstructionObj.animations.length) {
    animation.mixer = new THREE.AnimationMixer(UnderConstructionObj.scene);
    animation.actions.rotation = animation.mixer.clipAction(
      UnderConstructionObj.animations[0]
    );
    animation.actions.current = animation.actions.rotation;
    animation.actions.current.play();
  }
  useFrame((state, delta) => {
    // mixer?.update(delta);
    animation.mixer.update(delta * 0.2);
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
