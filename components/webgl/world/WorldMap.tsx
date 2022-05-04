import { ThreeEvent } from "@react-three/fiber";
import { Suspense, FunctionComponent } from "react";
import SkipHouse from "./SkipHouse";
import UnderConstruction from "./UnderConstruction";
import OceanRnd from "./Ocean_rnd";
import RhinoModelLoader from "../util/RhinoModelLoader";

type Props = {
  selectedModelName: string;
  handleClick: (e: ThreeEvent<MouseEvent>) => void;
};

const Map: FunctionComponent<Props> = ({ selectedModelName, handleClick }) => {
  const worldMapPath = "../../models/world/world_map.3dm";
  const worldMapObj = RhinoModelLoader(worldMapPath);

  return (
    <>
      <Suspense fallback={null}>
        <primitive object={worldMapObj} />
      </Suspense>
      <SkipHouse
        selectedModelName={selectedModelName}
        handleClick={handleClick}
      />
      <UnderConstruction />
      <OceanRnd handleClick={handleClick} />
    </>
  );
};

export default Map;
