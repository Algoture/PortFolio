"use client";
import { motion } from "motion/react";
import { skills } from "../Utils/Data";

const SkillChip = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.02, duration: 0.3 }}
      className="group relative">
      <div className="relative px-4 py-2 bg-neutral-900/60 border border-neutral-800 hover:border-accent/50 transition-colors duration-300 overflow-hidden cursor-default">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

        <div className="absolute top-0 left-0 w-[2px] h-[2px] bg-neutral-600 group-hover:bg-accent" />
        <div className="absolute bottom-0 right-0 w-[2px] h-[2px] bg-neutral-600 group-hover:bg-accent" />

        <div className="absolute top-1/2 -left-[1px] w-[2px] h-2 bg-neutral-800 group-hover:bg-accent transition-colors transform -translate-y-1/2" />

        <div className="flex items-center gap-2">
          <span className="text-[9px] text-neutral-600 font-mono group-hover:text-accent transition-colors">
            0{(index % 9) + 1}
          </span>
          <span className="text-xs md:text-sm text-neutral-400 font-mono font-medium tracking-wide group-hover:text-white transition-colors uppercase">
            {skill.skill}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const CapacityBar = () => (
  <div className="flex items-center gap-2 mb-6 w-full max-w-xs opacity-70">
    <span className="text-[9px] text-neutral-500 font-mono whitespace-nowrap">
      MEMORY_ALLOCATION:
    </span>
    <div className="h-2 flex-1 bg-neutral-900 border border-neutral-800 p-[1px] flex gap-[1px]">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className={`h-full flex-1 ${
            i < 9 ? "bg-accent/40" : "bg-neutral-800"
          }`}
        />
      ))}
    </div>
    <span className="text-[9px] text-accent font-mono">78%</span>
  </div>
);

const Skills = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto bg-[#050505] py-12 px-6 border-b border-neutral-800">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-neutral-800 pb-4">
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "40px" }}
              className="h-[2px] bg-accent mb-2"
            />
            <h2 className="text-2xl font-bold text-white tracking-tight">
              SYSTEM_CAPABILITIES
            </h2>
          </div>

          <div className="text-right hidden md:block">
            <div className="text-[9px] text-neutral-500 font-mono">
              TOTAL_MODULES
            </div>
            <div className="text-xl font-mono text-accent leading-none">
              {skills.length < 10 ? `0${skills.length}` : skills.length}
            </div>
          </div>
        </div>

        <CapacityBar />

        <div className="flex flex-wrap gap-3">
          {skills.map((item, idx) => (
            <SkillChip key={item.id || idx} skill={item} index={idx} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-10 w-px h-8 bg-neutral-800">
        <div className="absolute bottom-0 -left-1 w-2 h-2 bg-neutral-800 border border-neutral-600" />
      </div>
    </section>
  );
};

export default Skills;
