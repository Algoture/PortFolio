"use client";
import { motion } from "framer-motion";
const totalPathLength = 120;
const pathVariants = {
  initial: {
    strokeDashoffset:totalPathLength,
    strokeDasharray: `${totalPathLength} ${totalPathLength}`,
  },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: `${totalPathLength} ${totalPathLength}`,
    opacity: [0, 1, 1, 0],
  },
};

export const Box = ({ svgOptions }) => {
  const paths = ["M0 0H40L40 40H80"];

  return (
    <motion.svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute top-[40px] left-0">
      {paths.map((path, idx) => (
        <motion.path
          d={path}
          stroke={"#00ff00"}
          strokeWidth="1.4"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.floor(Math.random() * 5),
            repeatDelay: Math.floor(Math.random() * 1 + 2),
          }}
          key={`path-first-${idx}`}
        />
      ))}
    </motion.svg>
  );
};
