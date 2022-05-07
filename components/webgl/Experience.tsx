import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import style from "../../styles/webgl/experience.module.css";
import WorldMap from "./world/World";
import Environment from "./world/Environment";
import { WebGLRendererParameters } from "three";

const renderOptions: WebGLRendererParameters = {
  logarithmicDepthBuffer: true,
};

const Experience = () => {
  return (
    <div id="canvas-container" className={style.canvas_container}>
      <Canvas
        performance={{ min: 0.5 }}
        gl={renderOptions}
        onCreated={(canvasCtx) => {
          canvasCtx.gl.physicallyCorrectLights = true;
        }}
        shadows={true}
      >
        <Environment />
        <WorldMap />
        <Camera />
      </Canvas>
    </div>
  );
};

export default Experience;
