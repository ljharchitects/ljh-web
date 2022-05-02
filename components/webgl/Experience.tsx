import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import style from "../../styles/webgl/experience.module.css";
import Box from "./Box";
import WorldMap from "./world/WorldMap";
import Environment from "./world/Environment";

const Experience = () => {
  return (
    <div id="canvas-container" className={style.canvas_container}>
      <Canvas>
        <Environment />
        <WorldMap />
        <Camera />
      </Canvas>
    </div>
  );
};

export default Experience;
