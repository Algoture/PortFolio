"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ReactJSIcon } from "../Components/Icons";

export default function Bento() {
  const [selected, setSelected] = useState(null);
  const items = ["A", "B", "C", "D"];

  return (
    <div className="flex gap-3 p-10 items-end">
      {items.map((item, index) => {
        const isSelected = selected === index;

        return (
          <motion.div
            key={index}
            layout
            onClick={() => setSelected(isSelected ? null : index)}
            className={`cursor-pointer flex items-center justify-center relative
            w-20 h-20 rounded-lg text-white font-bold shadow-lg
            ${isSelected ? "bg-black h-36 scale-110" : "bg-gray-400"}
          `}
            transition={{
              type: "spring",
              stiffness: 450,
              damping: 20,
              mass: 0.1,
            }}
            whileTap={{ scale: 0.95 }}>
            {item}

            {isSelected && (
              <motion.div
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="">
                <ReactJSIcon className="size-5" />
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
