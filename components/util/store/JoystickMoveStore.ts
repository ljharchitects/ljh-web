import create, { State } from "zustand";

interface joystickMoveState extends State {
  joystickForBackwardVal: number;
  joystickLeftRightVal: number;
  joystickUpDownVal: number;
  setJoystickForBackwardVal: (dist: number) => void;
  setJoystickLeftRightVal: (dist: number) => void;
  setJoystickUpDownVal: (dist: number) => void;
}

const useJoystickMoveStore = create<joystickMoveState>((set) => ({
  joystickForBackwardVal: 0,
  joystickLeftRightVal: 0,
  joystickUpDownVal: 0,
  setJoystickForBackwardVal: (dist: number) =>
    set((state) => ({ joystickForBackwardVal: dist })),
  setJoystickLeftRightVal: (dist: number) =>
    set((state) => ({ joystickLeftRightVal: dist })),
  setJoystickUpDownVal: (dist: number) =>
    set((state) => ({ joystickUpDownVal: dist })),
}));

export { useJoystickMoveStore };
