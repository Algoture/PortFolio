"use client";
import { motion } from "framer-motion";

export const DrawBorder = ({ children, className }) => {
    return (
        <div className={`relative ${className}`}>
            <motion.svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                fill="none"
            >
                <motion.rect
                    width="100%"
                    height="100%"
                    stroke="#01ff00"
                    strokeWidth="1"
                    strokeOpacity={0.5}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </motion.svg>
            {children}
        </div>
    );
};

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

export const KernelModule = ({ name, version, load }) => (
    <div className="flex items-center justify-between text-[10px] font-mono mb-2 group cursor-default">
        <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-neutral-600 group-hover:bg-accent transition-colors" />
            <span className="text-neutral-400 group-hover:text-white transition-colors uppercase">{name}</span>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-neutral-600 hidden group-hover:inline-block">{version}</span>
            <div className="w-12 h-1 bg-neutral-800 relative overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 h-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${load}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />
            </div>
        </div>
    </div>
);

export const TerminalLog = () => {
    const logs = [
        "loading_assets...",
        "connecting_db...",
        "fetching_data...",
        "optimizing_img...",
        "hydrating_ui...",
        "checking_auth...",
        "rendering_3d..."
    ];

    return (
        <div className="h-24 overflow-hidden relative font-mono text-[9px] text-neutral-500 opacity-70">
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10" />
            <motion.div
                animate={{ y: [0, -100] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                {[...logs, ...logs, ...logs].map((log, i) => (
                    <div key={i} className="mb-1 flex gap-2">
                        <span className="text-accent">{`>`}</span>
                        <span>{`[${Date.now().toString().slice(-4)}] ${log}`}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};