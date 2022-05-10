import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import style from "../../styles/webgl/experience.module.css";
import WorldMap from "./world/World";
import Environment from "./world/Environment";
import { WebGLRendererParameters } from "three";
import JoystickController from "../JoystickController";
import useSelectedModelNameStore from "../util/store/SelectModelStore";
import { Loader } from "@react-three/drei";

const renderOptions: WebGLRendererParameters = {
  logarithmicDepthBuffer: true,
};

const Experience = () => {
  const selectedModelName = useSelectedModelNameStore(
    (state) => state.selectedModelName
  );
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
      <div style={selectedModelName ? { display: "" } : { display: "none" }}>
        <JoystickController />
      </div>
      {/* <Loader /> */}
    </div>
  );
};

export default Experience;
