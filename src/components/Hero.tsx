"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    const { title, subtitle, cta, image } = portfolioData.hero;

    return (
        <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-white dark:bg-slate-950">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-950/20" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 max-w-4xl mx-auto space-y-6 flex flex-col items-center"
            >
                {image && (
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl mb-6">
                        <Image
                            src={image}
                            alt="Profile"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    <span className="block text-indigo-600 dark:text-indigo-400">Hi, I'm Mohd Akif</span>
                    <span className="block mt-2">{title}</span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-300">
                    {subtitle}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <a
                        href={cta.resume}
                        className="inline-flex items-center justify-center px-8 py-3 w-full sm:w-auto text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg transition-all shadow-lg hover:shadow-indigo-500/50"
                    >
                        Download Resume
                    </a>
                    <a
                        href={cta.contact}
                        className="inline-flex items-center justify-center px-8 py-3 w-full sm:w-auto text-base font-medium rounded-md text-indigo-600 bg-white border border-indigo-200 hover:bg-indigo-50 dark:bg-slate-900 dark:text-indigo-400 dark:border-indigo-800 dark:hover:bg-slate-800 md:text-lg transition-all shadow-sm"
                    >
                        Contact Me
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="h-8 w-8 text-slate-400 dark:text-slate-500" />
            </motion.div>
        </section>
    );
}
