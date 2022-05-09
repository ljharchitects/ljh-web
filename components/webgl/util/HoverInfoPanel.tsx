import { Html } from "@react-three/drei";
import { FunctionComponent } from "react";
import { Vector3 } from "three";
import style from "../../../styles/components/info.module.css";

interface IHoverInfoPanel {
  position:
    | Vector3
    | Parameters<Vector3["set"]>
    | Parameters<Vector3["setScalar"]>[0];
  hover: boolean;
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
