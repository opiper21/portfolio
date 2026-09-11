import { useEffect } from "react";

function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] bg-cream flex flex-col items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24 border-8 border-brown animate-retro-spin relative">
          <div className="absolute inset-4 bg-burnt"></div>
        </div>
      </div>

      <p className="font-display text-2xl uppercase text-brown mt-8 tracking-widest">
        Loading
        <span className="inline-flex ml-1">
          <span className="animate-pulse-dot" style={{ animationDelay: "0s" }}>
            .
          </span>
          <span
            className="animate-pulse-dot"
            style={{ animationDelay: "0.2s" }}
          >
            .
          </span>
          <span
            className="animate-pulse-dot"
            style={{ animationDelay: "0.4s" }}
          >
            .
          </span>
        </span>
      </p>
    </div>
  );
}

export default Loader;
