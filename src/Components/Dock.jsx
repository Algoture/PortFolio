import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import LinkWithIcon from "./LinkWithIcon";
import { sociaLinks } from "../Data";
export default function Dock() {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="dock"
    >
      {sociaLinks.map((i) => (
        <AppIcon mouseX={mouseX} key={i.id} social={i} />
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseX, social }) {
  let ref = useRef(null);
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width /2;
  });
  let widthSync = useTransform(distance, [-100, 0, 100], [30,70, 30]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 100, damping: 10 });
  return (
    <motion.div ref={ref} className="getDiv" style={{width}}>
      <LinkWithIcon to={social.link} svg={social.svg} />
    </motion.div>
  );
}
