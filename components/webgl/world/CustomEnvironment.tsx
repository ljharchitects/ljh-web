import { Environment } from "@react-three/drei";
import React from "react";

const CustomEnvironment = () => (
  <>
    <ambientLight color={"#ffffff"} intensity={0.5} />
    <directionalLight
      color={"#ffffff"}
      intensity={4}
      castShadow
      position={[100, 120, 100]}
      shadow-camera-near={70}
      shadow-camera-far={350}
      shadow-camera-left={-130}
      shadow-camera-right={200}
      shadow-camera-top={110}
      shadow-camera-bottom={-110}
      shadow-bias={-0.008}
      shadow-mapSize={[1024 / 2, 1024 / 2]}
    />
    <Environment
      files={[`px.png`, `nx.png`, `py.png`, `ny.png`, `pz.png`, `nz.png`]}
      path={"/images/CubeMap/"}
    />
    {/* <Environment preset="sunset" /> */}
  </>
);

export default CustomEnvironment;
