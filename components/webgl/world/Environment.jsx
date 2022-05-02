import React from "react";

const Environment = (props) => (
  <>
    <ambientLight color={"#ffffff"} />
    <directionalLight
      castShadow={true}
      position={[100, 120, 100]}
      shadow-camera-near={70}
      shadow-camera-far={350}
      shadow-camera-left={-130}
      shadow-camera-right={200}
      shadow-camera-top={110}
      shadow-camera-bottom={-110}
    />
  </>
);

export default Environment;
