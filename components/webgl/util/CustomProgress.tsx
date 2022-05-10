import { useProgress } from "@react-three/drei";
import style from "../../../styles/components/progress.module.css";

const CustomProgress = () => {
  const { progress } = useProgress();

  return (
    <div className={style.container}>
      <div className={style.ldsGrid}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={style.item}>{Math.round(progress)} % loaded</div>
    </div>
  );
};

export default CustomProgress;
