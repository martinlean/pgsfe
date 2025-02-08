import React, { useEffect } from "react";

interface InfiniteScrollProps {
  speed?: "fast" | "slow";
  direction?: "left" | "right";
  children: React.ReactNode;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  speed = "fast",
  direction = "left",
  children
}) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  const addAnimation = (scrollers: NodeListOf<Element>) => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");
      const scrollerInner = scroller.querySelector(".scroller__inner")!;
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  return (
    <div
      className={`scroller w-full overflow-hidden ${
        direction === "right" ? "reverse" : ""
      } [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]`}
      data-speed={speed}
      data-direction={direction}
    >
      <div className="scroller__inner flex gap-4 p-4">{children}</div>
    </div>
  );
};

export default InfiniteScroll;
