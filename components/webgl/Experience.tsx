import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import style from "../../styles/webgl/experience.module.css";
import WorldMap from "./world/World";
import CustomEnvironment from "./world/CustomEnvironment";
import JoystickController from "../JoystickController";
import useSelectedModelNameStore from "../util/store/SelectModelStore";
import * as THREE from "three";
import { EffectComposer, Outline } from "@react-three/postprocessing";

const renderOptions: THREE.WebGLRendererParameters = {
  logarithmicDepthBuffer: true,
  antialias: true,
  powerPreference: "high-performance",
};

const Experience = () => {
  const selectedModelName = useSelectedModelNameStore(
    (state) => state.selectedModelName
  );
  const hoveredModel = useSelectedModelNameStore((state) => state.hoveredModel);

  return (
    <div id="canvas-container" className={style.canvas_container}>
      <Canvas
        // performance={{ min: 0.5 }}
        gl={renderOptions}
        onCreated={(canvasCtx) => {
          canvasCtx.gl.physicallyCorrectLights = true;
          canvasCtx.gl.outputEncoding = THREE.sRGBEncoding;
          // canvasCtx.gl.toneMapping = THREE.NoToneMapping;
          // canvasCtx.gl.toneMapping = THREE.ReinhardToneMapping;
          canvasCtx.gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
        shadows={true}
      >
        <CustomEnvironment />
        <WorldMap />
        <Camera />
        <EffectComposer autoClear={false}>
          {/* <EffectComposer multisampling={8} autoClear={false}> */}
          <Outline
            // @ts-ignore
            selection={hoveredModel}
            // selectionLayer={10}
            blur
            edgeStrength={100}
          />
        </EffectComposer>
      </Canvas>
      <div style={selectedModelName ? { display: "" } : { display: "none" }}>
        <JoystickController />
      </div>
      {/* <Loader /> */}
    </div>
  );
};

export default Experience;
