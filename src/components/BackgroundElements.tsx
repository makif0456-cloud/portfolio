"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Cpu, Server, Terminal, Laptop, Activity } from "lucide-react";

export function BackgroundElements() {
    const icons = [
        { Icon: Code, top: "10%", left: "5%", delay: 0 },
        { Icon: Database, top: "20%", right: "10%", delay: 2 },
        { Icon: Globe, bottom: "15%", left: "10%", delay: 4 },
        { Icon: Cpu, top: "40%", left: "20%", delay: 1 },
        { Icon: Server, bottom: "30%", right: "5%", delay: 3 },
        { Icon: Terminal, top: "15%", right: "25%", delay: 5 },
        { Icon: Laptop, bottom: "10%", right: "20%", delay: 2.5 },
        { Icon: Activity, top: "60%", left: "8%", delay: 1.5 },
    ];

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 z-0">
                <img
                    src="/background.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-50 dark:opacity-40"
                />
            </div>
            {icons.map(({ Icon, top, left, right, bottom, delay }, index) => (
                <motion.div
                    key={index}
                    className="absolute text-slate-200 dark:text-slate-800/50 opacity-30 dark:opacity-20"
                    style={{ top, left, right, bottom }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.1, 1],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 5 + delay,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: delay,
                    }}
                >
                    <Icon className="w-24 h-24 sm:w-32 sm:h-32" strokeWidth={1} />
                </motion.div>
            ))}
            <div className="absolute inset-0 bg-grid-slate-200/[0.04] dark:bg-grid-slate-800/[0.04] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        </div>
    );
}
