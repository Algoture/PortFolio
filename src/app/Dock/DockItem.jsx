import {
  motion,
  useAnimationControls,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useEvent } from "react-use";
import { useMouse } from "./MouseProvider";
import { useDock } from "./Dock";
import "./Dock.css";

const DockItem = ({ id, children, ...props }) => {
  const ref = useRef(null);
  const mouse = useMouse();
  const dock = useDock();

  const [elCenterX, setElCenterX] = useState(0);
  const [opened, setOpened] = useState(false);
  const controls = useAnimationControls();

  const dimension = useTransform(mouse.position.x, (mouseX) => {
    return (
      40 +
      38 *
        Math.cos((((mouseX - elCenterX) / (dock.width ?? 0)) * Math.PI) / 2) **
          58
    );
  });

  const spring = useSpring(40, {
    damping: 10,
    stiffness: 150,
    mass: 0.01,
  });

  useEffect(() => {
    const unsubscribe = dimension.on("change", (val) => {
      if (dock?.hovered) {
        spring.set(val);
      } else {
        spring.set(40);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [spring, dimension, dock?.hovered]);

  useEffect(() => {
    const rect = ref.current ? ref.current.getBoundingClientRect() : null;
    if (rect) setElCenterX(rect.x + rect.width / 2);
  }, []);

  useEvent("resize", () => {
    const rect = ref.current ? ref.current.getBoundingClientRect() : null;
    if (rect) setElCenterX(rect.x + rect.width / 2);
  });

  return (
    <motion.li
      className="dock-item"
      {...props}
      onClick={() => {
        if (!opened) {
          setOpened(true);
          controls.start(() => ({ translateY: [0, -20, 0] }));
        }
      }}
    >
      <motion.button
        ref={ref}
        id={id}
        className="ui-box"
        aria-describedby={id}
        animate={controls}
        custom={spring}
        transition={{
          default: { duration: 0.2 },
          translateY: { duration: 0.4, ease: "easeInOut", times: [0, 0.5, 1] },
        }}
        style={{
          height: spring,
          width: spring,
          border: "none",
          borderRadius: "10px",
          backgroundColor: "transparent",
        }}
        whileTap={{ scale: opened ? 1 : 0.85 }}
        whileHover={{
          // backgroundColor: "#95C623",
          border: "none",
        }}
        whileFocus={{
          backgroundColor: "#004bff",
        }}
      >
        {children}
      </motion.button>
      {opened && <span className="dock-indicator" aria-hidden="true" />}
    </motion.li>
  );
};

export default DockItem;
