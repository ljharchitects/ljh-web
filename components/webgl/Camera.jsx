import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";

const Camera = (props) => {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        fov={40}
        near={0.01}
        far={3000}
        position={[-110, 150, 200]}
      />
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        autoRotate={true}
        autoRotateSpeed={-0.1}
        enableRotate={true}
        target={[0, 0, 0]}
      />
    </>
  );
};

export default Camera;
