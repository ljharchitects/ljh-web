import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { Mesh } from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const FutsalPlayGround = (props: JSX.IntrinsicElements["group"]) => {
  const FutsalPlayGroundPath = "../../models/world/futsalPlayGround.glb";
  const { nodes, materials } = useLoader(
    GLTFLoader,
    FutsalPlayGroundPath,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      // @ts-ignore
      loader.setDRACOLoader(dracoLoader);
    }
  );
  return (
    <>
      <Suspense fallback={null}>
        <group {...props} dispose={null}>
          <mesh
            geometry={(nodes.Ground as Mesh).geometry}
            material={materials.groundMatrial}
          />
          <mesh
            geometry={(nodes.Ground_1 as Mesh).geometry}
            material={materials.Green}
          />
          <mesh
            geometry={(nodes.SteelObj as Mesh).geometry}
            material={materials.groundMatrial}
          />
          {/* <primitive object={FutsalPlayGroundObj} /> */}
        </group>
      </Suspense>
    </>
  );
};

export default FutsalPlayGround;
