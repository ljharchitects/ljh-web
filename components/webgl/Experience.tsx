import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import style from "../../styles/webgl/experience.module.css";
import WorldMap from "./world/World";
import Environment from "./world/Environment";
import { WebGLRendererParameters } from "three";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  SSAO,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import JoystickController from "../JoystickController";
import useSelectedModelNameStore from "../util/store/SelectModelStore";

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
        {/* <EffectComposer> */}
        {/* <DepthOfField focusDistance={0.4} focalLength={1} bokehScale={2} /> */}
        {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.5} height={10} /> */}
        {/* <Noise opacity={0.2} /> */}
        {/* <Vignette eskil={false} offset={0.1} darkness={0.5} /> */}
        {/* </EffectComposer> */}
      </Canvas>
      <div style={selectedModelName ? { display: "" } : { display: "none" }}>
        <JoystickController />
      </div>
    </div>
  );
};

export default Experience;
