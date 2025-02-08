import { useRef, useState, useEffect, ReactNode } from "react";

interface SlideOutSectionProps {
  children: ReactNode;
}

export function SlideOutSection({ children }: SlideOutSectionProps) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Para de observar após a primeira vez
        }
      });
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div className={`slide-out ${isVisible ? "is-visible" : ""}`} ref={domRef}>
      {children}
    </div>
  );
}
