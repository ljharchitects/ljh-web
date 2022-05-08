import { useState, useEffect } from "react";
import useSelectedModelNameStore from "../../../util/store/SelectModelStore";
import logo from "../../../../styles/components/header.module.css";

export const Interaction = () => {
  const [directionInput, setDirectionInput] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
    down: false,
  });

  const { setSelectedModelName } = useSelectedModelNameStore();

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

  const logoElement = document.querySelector(`.${logo.logoTxt}`);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    logoElement?.addEventListener("click", () => setSelectedModelName(""));
    return () => (
      document.removeEventListener("keydown", handleKeyDown),
      document.removeEventListener("keyup", handleKeyUp),
      logoElement?.removeEventListener("click", () => setSelectedModelName(""))
    );
  });

  return {
    directionInput,
  };
};
