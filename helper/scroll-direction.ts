import { useEffect, useState } from "react";

export function useScrollDirection(threshold = 10) {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction =
        scrollY > lastScrollY + threshold
          ? "down"
          : scrollY < lastScrollY - threshold
            ? "up"
            : scrollDirection;

      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection, threshold]);

  return scrollDirection;
}
