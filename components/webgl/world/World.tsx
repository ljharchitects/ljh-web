import { FunctionComponent } from "react";
import SkipHouse from "./SkipHouse";
import Map from "./Map";
import UnderConstruction from "./UnderConstruction";
import OceanRnd from "./Ocean_rnd";

const World: FunctionComponent = () => {
  return (
    <>
      <Map />
      <SkipHouse />
      <UnderConstruction />
      <OceanRnd />
    </>
  );
};
export default World;
