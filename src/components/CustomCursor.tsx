import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.style.cursor === "pointer";
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full border-4 border-burnt transition-all duration-150 hidden lg:block ${
          isHovering
            ? "w-16 h-16 -ml-8 -mt-8 bg-mustard/30"
            : "w-8 h-8 -ml-4 -mt-4"
        }`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      {/* Inner Dot */}
      <div
        className="fixed pointer-events-none z-[9999] w-2 h-2 -ml-1 -mt-1 rounded-full bg-brown hidden lg:block"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
}

export default CustomCursor;
