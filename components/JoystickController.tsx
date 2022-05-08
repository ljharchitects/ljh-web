import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useDragControls,
} from "framer-motion";

import style from "../styles/components/joystickcontroller.module.css";
import { useJoystickMoveStore } from "./util/store/JoystickMoveStore";

const JoystickController = () => {
  const moveConstrainsRef = useRef(null);
  const updownConstrainsRef = useRef(null);
  const moveX = useMotionValue(0);
  const moveY = useMotionValue(0);
  const updownY = useMotionValue(0);
  const dragControls = useDragControls();

  const setJoystickForBackwardVal = useJoystickMoveStore(
    (state) => state.setJoystickForBackwardVal
  );
  const setJoystickLeftRightVal = useJoystickMoveStore(
    (state) => state.setJoystickLeftRightVal
  );
  const setJoystickUpDownVal = useJoystickMoveStore(
    (state) => state.setJoystickUpDownVal
  );

  useEffect(() => {
    moveX.onChange((latest) => {
      setJoystickLeftRightVal(latest);
    });
  }, [moveX]);

  useEffect(() => {
    moveY.onChange((latest) => setJoystickForBackwardVal(latest));
  }, [moveY]);

  useEffect(() => {
    updownY.onChange((latest) => setJoystickUpDownVal(latest));
  }, [updownY]);

  return (
    <>
      <div className={style.move}>
        <div className={style.item}>∧</div>
        <div className={style.sideContainer}>
          <div className={style.sideItem}>＜</div>
          <div className={style.sideItem}>＞</div>
        </div>
        <div className={style.item}>∨</div>
        <motion.div className={style.moveDragArea} ref={moveConstrainsRef} />
        <motion.div
          style={{ x: moveX, y: moveY }}
          className={style.moveDragTarget}
          drag
          dragSnapToOrigin={true}
          dragConstraints={moveConstrainsRef}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          dragControls={dragControls}
          dragElastic={0.2}
          dragPropagation
        />
      </div>
      <div className={style.updown}>
        <div className={style.item}>UP</div>
        <div className={style.item}>DOWN</div>
        <motion.div
          className={style.updownDragArea}
          ref={updownConstrainsRef}
        />
        <motion.div
          style={{ y: updownY }}
          className={style.updownDragTarget}
          drag="y"
          dragSnapToOrigin={true}
          dragConstraints={updownConstrainsRef}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          dragControls={dragControls}
          dragElastic={0.2}
          dragPropagation
        />
      </div>
    </>
  );
};

export default JoystickController;
