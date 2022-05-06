import { ThreeEvent } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { ModelName } from "../ModelName";

export const Interaction = (setSelectedModelName) => {
  const [directionInput, setDirectionInput] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
    down: false,
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "Escape":
        setSelectedModelName("");
        break;
      case "ArrowUp":
      case "KeyW":
        setDirectionInput({ ...directionInput, forward: true });
        break;

      case "ArrowLeft":
      case "KeyA":
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
        setDirectionInput({ ...directionInput, forward: false });
        break;

      case "ArrowLeft":
      case "KeyA":
        setDirectionInput({ ...directionInput, left: false });
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
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => (
      document.removeEventListener("keydown", handleKeyDown),
      document.removeEventListener("keyup", handleKeyUp)
    );
  });

  return {
    directionInput,
  };
};
