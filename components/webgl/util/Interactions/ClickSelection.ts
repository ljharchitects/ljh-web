import { ThreeEvent } from "@react-three/fiber";
import { useState } from "react";
import { ModelName } from "../ModelName";

export const ClickSelection = () => {
  const [selectedModelName, setSelectedModelName] = useState("");

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    const skipHouseMinName: ModelName = "skipHouseMin";
    const oceanRndMinName: ModelName = "oceanRndMin";

    switch (e.eventObject.name) {
      case skipHouseMinName:
        setSelectedModelName(skipHouseMinName);
        break;
      case oceanRndMinName:
        setSelectedModelName(oceanRndMinName);
        break;
      default:
        break;
    }
  };

  return {
    selectedModelName,
    setSelectedModelName,
    handleClick,
  };
};
