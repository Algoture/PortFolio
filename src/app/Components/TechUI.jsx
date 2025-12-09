"use client";
import { motion } from "motion/react";

export const DimensionLine = ({ label, className }) => (
    <div className={`flex flex-col items-center w-full ${className}`}>
        <div className="flex items-center w-full gap-2 opacity-50">
            <div className="h-3 w-px bg-accent" /> 
            <div className="h-px flex-1 bg-accent" /> 
            <span className="text-[9px] text-accent font-mono whitespace-nowrap bg-black px-1">
                {label}
            </span>
            <div className="h-px flex-1 bg-accent" /> 
            <div className="h-3 w-px bg-accent" />
        </div>
    </div>
);

export const Callout = ({ text, className }) => (
    <div className={`absolute flex items-center ${className}`}>
        <div className="w-8 h-px bg-accent/60" />
        <div className="w-2 h-2 border border-accent/60 rounded-full" />
        <span className="ml-2 text-[10px] text-accent/80 font-mono uppercase">{text}</span>
    </div>
);

export const Gyroscope = () => (
    <div className="relative flex items-center justify-center w-32 h-32 mx-auto my-6">
        <div className="absolute inset-0 border border-neutral-800 rounded-full" />

        <motion.div
            className="absolute inset-2 border border-dashed border-accent/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
            className="absolute inset-8 border-2 border-t-transparent border-b-transparent border-l-accent border-r-accent rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute inset-0 m-auto w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_#01ff00]" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-px bg-accent/10" />
            <div className="h-full w-px bg-accent/10 absolute" />
        </div>
    </div>
);
