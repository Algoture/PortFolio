"use client";
import { motion } from "framer-motion";

const pathVariants = {
  initial: { strokeDashoffset: 120, strokeDasharray: "40" },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: "80",
    opacity: [0, 1, 1, 0],
  },
};

export const Box = ({ svgOptions }) => {
  const paths = ["M1 40V1H40V40H1Z"];

  return (
    <motion.svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute top-0 left-0">
      {paths.map((path, idx) => (
        <motion.path
          d={path}
          stroke={"#00ff00"}
          strokeWidth="2"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 5,
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
