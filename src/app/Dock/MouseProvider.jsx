import { useMotionValue, useVelocity } from "framer-motion";
import { createContext, useContext, useMemo } from "react";
import { useEvent } from "react-use";

const useMousePosition = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEvent("mousemove", (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
  });

  return useMemo(() => ({ x, y }), [x, y]);
};

const MouseContext = createContext(null);

export const useMouse = () => {
  return useContext(MouseContext);
};

export const MouseProvider = ({ children }) => {
  const { x, y } = useMousePosition();
  const velocityX = useVelocity(x);
  const velocityY = useVelocity(y);

  const mouse = useMemo(
    () => ({
      position: { x, y },
      velocity: { x: velocityX, y: velocityY },
    }),
    [x, y, velocityX, velocityY]
  );

  return (
    <MouseContext.Provider value={mouse}>{children}</MouseContext.Provider>
  );
};
