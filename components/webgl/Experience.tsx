import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import style from "../../styles/webgl/experience.module.css";
import WorldMap from "./world/WorldMap";
import Environment from "./world/Environment";
import { WebGLRendererParameters } from "three";
import { useEffect } from "react";
import { interaction } from "./util/Interaction";

const renderOptions: WebGLRendererParameters = {
  logarithmicDepthBuffer: true,
};

const Experience = () => {
  const {
    selectedModelName,
    handleClick,
    handleKeyDown,
    handleKeyUp,
    directionInput,
  } = interaction();

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => (
      document.removeEventListener("keydown", handleKeyDown),
      document.removeEventListener("keyup", handleKeyUp)
    );
  });

  return (
    <div id="canvas-container" className={style.canvas_container}>
      <Canvas
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
};

export default Experience;
