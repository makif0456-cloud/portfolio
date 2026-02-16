import React from "react";
import { Section } from "./Section";
import { portfolioData } from "@/data";
import { Trophy } from "lucide-react";

export function Achievements() {
    const { achievements } = portfolioData;

    return (
        <Section id="achievements" className="bg-white dark:bg-slate-950">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                    Achievements
                </h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((item, idx) => (
                    <div
                        key={idx}
                        className="group relative p-8 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Trophy className="w-24 h-24 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 relative z-10 group-hover:text-indigo-600 transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 relative z-10">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
