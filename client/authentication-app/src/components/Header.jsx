import React, { useContext, useRef, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { userData } = useContext(AppContext);
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [velocity, setVelocity] = useState({ dx: 1.2, dy: 1 });

  useEffect(() => {
    let animationFrame;
    const move = () => {
      if (!containerRef.current || !headerRef.current) return;
      const container = containerRef.current.getBoundingClientRect();
      const header = headerRef.current.getBoundingClientRect();
      let { x, y } = position;
      let { dx, dy } = velocity;

      x += dx;
      y += dy;

      // Bounce off edges
      if (x <= 0 || x + header.width >= container.width) dx = -dx;
      if (y <= 0 || y + header.height >= container.height) dy = -dy;

      setPosition({ x, y });
      setVelocity({ dx, dy });
      animationFrame = requestAnimationFrame(move);
    };
    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, [position, velocity]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "40vh",
        overflow: "hidden",
      }}
    >
      <h1
        ref={headerRef}
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          fontSize: "2rem",
          userSelect: "none",
        }}
        className="flex items-center gap-2 text-xl sm:text-3xl text-gray-800"
      >
        Hello {userData ? userData.name : "Guest"}!
      </h1>
    </div>
  );
};

export default Header;
