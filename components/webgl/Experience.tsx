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
  antialias: true,
};

const Experience = () => {
  const {
    selectedModelName,
    handleClick,
    handleKeyDown,
    handleKeyUp,
    directionInput,
    prevTime,
    setPrevTime,
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
      <Canvas gl={renderOptions} shadows={true} linear={true}>
        <Environment />
        <WorldMap
          selectedModelName={selectedModelName}
          handleClick={handleClick}
        />
        <Camera
          selectedModelName={selectedModelName}
          directionInput={directionInput}
          prevTime={prevTime}
          setPrevTime={setPrevTime}
        />
      </Canvas>
    </div>
  );
};

export default Experience;
