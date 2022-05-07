import { ThreeEvent } from "@react-three/fiber";
import { FunctionComponent, memo } from "react";
import SkipHouse from "./SkipHouse";
import Map from "./Map";
import UnderConstruction from "./UnderConstruction";
import OceanRnd from "./Ocean_rnd";

type Props = {
  selectedModelName: string;
  handleClick: (e: ThreeEvent<MouseEvent>) => void;
};

const World: FunctionComponent<Props> = memo(
  ({ selectedModelName, handleClick }) => {
    return (
      <>
        <Map />
        <SkipHouse
          selectedModelName={selectedModelName}
          handleClick={handleClick}
        />
        <UnderConstruction />
        <OceanRnd handleClick={handleClick} />
      </>
    );
  }
);
World.displayName = "World";
export default World;
