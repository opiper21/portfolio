import { useEffect } from "react";

export function useScrollReveal(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    // Small delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -50px 0px" },
      );

      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [enabled]);
}
