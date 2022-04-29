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
  const contentRef = useRef();
  const scrollRef = useRef();
  const [height, setHeight] = useState(0);

  const backupHeight = height * surroundingBackup;

  const handleScroll = useCallback(() => {
    console.log("scroll!");
    if (scrollRef.current) {
      const scroll = scrollRef.current.scrollTop;
      if (scroll < backupHeight || scroll >= backupHeight + height) {
        scrollRef.current.scrollTop = backupHeight + (scroll % height);
      }
    }
  }, [height]);
  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
      scrollRef.current.scrollTop = backupHeight;
    }
  });

  return (
    <div className="infinite-scroll-loop-outer" onScroll={handleScroll}>
      <div
        className="infinite-scroll-loop-inner"
        ref={scrollRef}
        style={{ height, ...innerStyle }}
        onScroll={handleScroll}
      >
        {children}
        {/* <div ref={contentRef}>{children}</div> */}
      </div>
    </div>
  );
};

export default InfiniteScrollLoop;
