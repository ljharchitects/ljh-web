import { ThreeEvent } from "@react-three/fiber";
import { useState } from "react";
import { ModelName } from "./ModelName";

export const interaction = () => {
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
  const [prevTime, setPrevTime] = useState(performance.now());
  const [directionInput, setDirectionInput] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
    down: false,
  });
  let backward = false;
  let left = false;
  let right = false;
  let up = false;
  let down = false;
  // let directionInput = {
  //   forward,
  //   backward,
  //   left,
  //   right,
  //   up,
  //   down,
  // };

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "Escape":
        setSelectedModelName("");
        break;
      case "ArrowUp":
      case "KeyW":
        console.log("w down");
        setDirectionInput({ ...directionInput, forward: true });
        break;

      case "ArrowLeft":
      case "KeyA":
        console.log("a down");
        setDirectionInput({ ...directionInput, left: true });
        break;

      case "ArrowDown":
      case "KeyS":
        setDirectionInput({ ...directionInput, backward: true });
        break;

      case "ArrowRight":
      case "KeyD":
        setDirectionInput({ ...directionInput, right: true });
        break;

      case "KeyE":
        setDirectionInput({ ...directionInput, up: true });
        break;

      case "KeyQ":
        setDirectionInput({ ...directionInput, down: true });
        break;
      default:
        break;
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowUp":
      case "KeyW":
        console.log("w up");
        setDirectionInput({ ...directionInput, forward: false });
        break;

      case "ArrowLeft":
      case "KeyA":
        setDirectionInput({ ...directionInput, left: false });
        console.log("a up");
        break;

      case "ArrowDown":
      case "KeyS":
        setDirectionInput({ ...directionInput, backward: false });
        break;

      case "ArrowRight":
      case "KeyD":
        setDirectionInput({ ...directionInput, right: false });
        break;

      case "KeyE":
        setDirectionInput({ ...directionInput, up: false });
        break;

      case "KeyQ":
        setDirectionInput({ ...directionInput, down: false });
        break;
      default:
        break;
    }
  };

  return {
    selectedModelName,
    handleClick,
    handleKeyDown,
    handleKeyUp,
    directionInput,
    prevTime,
    setPrevTime,
  };
};
