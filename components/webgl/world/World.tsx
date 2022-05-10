import { FunctionComponent } from "react";
import SkipHouse from "./SkipHouse";
import Map from "./Map";
import UnderConstruction from "./UnderConstruction";
import OceanRnd from "./Ocean_rnd";
import ViewOptimization from "./ViewOptimization";

const World: FunctionComponent = () => {
  return (
    <>
      <Map />
      <SkipHouse />
      {/* <UnderConstruction /> */}
      <OceanRnd />
      <ViewOptimization />
    </>
  );
};
export default World;
