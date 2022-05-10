import { Position } from "@react-three/drei/helpers/Position";
import { useLoader } from "@react-three/fiber";
import { FunctionComponent, Suspense } from "react";
import { Mesh, Object3D, Vector3 } from "three";
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
  console.log(nodes);
  return (
    <>
      <Suspense fallback={null}>
        <group {...props} dispose={null}>
          <mesh
            geometry={(nodes.GroundObj as Mesh).geometry}
            material={materials.groundMatrial}
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
