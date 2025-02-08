import { useRef, useState, useEffect, ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
}

export function FadeInSection({ children }: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Define `isVisible` como `true` apenas na primeira vez que se tornar visível
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
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}
