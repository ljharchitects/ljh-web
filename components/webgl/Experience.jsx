import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import style from "../../styles/webgl/experience.module.css";
import Box from "./Box";
import WorldMap from "./world/WorldMap";
import Environment from "./world/Environment";

const Experience = (props) => {
  return (
    <div id="canvas-container" className={style.canvas_container}>
      <Canvas>
        <Environment />
        {/* <pointLight position={[10, 10, 10]} /> */}
        {/* <Box position={[1.2, 0, 0]} />
        <Box position={[-1.2, 0, 0]} /> */}
        <WorldMap />
        <Camera />
      </Canvas>
    </div>
  );
};

export default Experience;
