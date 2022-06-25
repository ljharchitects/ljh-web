import { Html } from "@react-three/drei";
import { FunctionComponent } from "react";
import { Object3DNode, Vector3 } from "@react-three/fiber";
import style from "../../../styles/components/info.module.css";
import { Event, Object3D } from "three";

interface IHoverInfoPanel {
  position: Vector3;
  // hover: boolean;
  hover: Object3DNode<Object3D, Event> | null;
  isSelected: boolean;
  projectNo: string;
  projectName: string;
}

const HoverInfoPanel: FunctionComponent<IHoverInfoPanel> = ({
  position,
  hover,
  isSelected,
  projectNo,
  projectName,
}) => (
  <Html distanceFactor={150} sprite occlude position={position}>
    <div style={hover && !isSelected ? { display: "" } : { display: "none" }}>
      <div className={style.container}>
        <p>PROJECT NO. {projectNo}</p>
        <p>PROJECT NAME : {projectName}</p>
      </div>
    </div>
  </Html>
);

export default HoverInfoPanel;
