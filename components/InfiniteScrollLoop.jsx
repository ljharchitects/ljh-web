import style from "../styles/components/infinitescrollloop.module.css";
import {
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from "react";

const InfiniteScrollLoop = ({
  surroundingBackup = 1,
  outerStyle,
  innerStyle,
  children,
}) => {
  const contentRef = useRef(null);
  const scrollRef = useRef(null);
  const [height, setHeight] = useState(0);

  const backupHeight = height * surroundingBackup;

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const scroll = scrollRef.current.scrollTop;
      if (scroll <= backupHeight || scroll >= backupHeight + height) {
        scrollRef.current.scrollTop = backupHeight + (scroll % height);
      }
    }
  }, [height]);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
      scrollRef.current.scrollTop = backupHeight;
    }
  }, [height]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={style.outer}>
      <div
        className={style.inner}
        ref={scrollRef}
        style={{ height }}
        onScroll={handleScroll}
      >
        {Array(surroundingBackup)
          .fill()
          .map((item, index) => {
            return <div key={index}>{children}</div>;
          })}
        <div ref={contentRef}>{children}</div>
        {Array(surroundingBackup)
          .fill()
          .map((item, index) => (
            <div key={index}>{children}</div>
          ))}
      </div>
    </div>
  );
};

export default InfiniteScrollLoop;
