import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import style from "../../styles/webgl/experience.module.css";
import WorldMap from "./world/World";
import Environment from "./world/Environment";
import { WebGLRendererParameters } from "three";
import { memo, useEffect } from "react";
import { Interaction } from "./util/Interactions/CameraMove";
import { ClickSelection } from "./util/Interactions/ClickSelection";

const renderOptions: WebGLRendererParameters = {
  logarithmicDepthBuffer: true,
};

const Experience = memo(() => {
  const { selectedModelName, setSelectedModelName, handleClick } =
    ClickSelection();
  const { directionInput } = Interaction(setSelectedModelName);

  console.log("experience loaded!");
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
        <WorldMap
          selectedModelName={selectedModelName}
          handleClick={handleClick}
        />
        <Camera
          selectedModelName={selectedModelName}
          directionInput={directionInput}
        />
      </Canvas>
    </div>
  );
});

Experience.displayName = "Experience";

export default Experience;
