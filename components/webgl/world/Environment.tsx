import React, { memo } from "react";

const Environment = memo(() => (
  // FIXME
  <>
    <ambientLight color={"#ffffff"} />
    <directionalLight
      intensity={4}
      castShadow={true}
      position={[100, 120, 100]}
      shadow-camera-near={70}
      shadow-camera-far={350}
      shadow-camera-left={-130}
      shadow-camera-right={200}
      shadow-camera-top={110}
      shadow-camera-bottom={-110}
      shadow-bias={-0.008}
      shadow-mapSize={[1024 / 2, 1024 / 2]}
    />
  </>
));
Environment.displayName = "Environment";

export default Environment;
