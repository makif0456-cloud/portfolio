import React from "react";
import { Section } from "./Section";
import { portfolioData } from "@/data";

export function Skills() {
    const { skills } = portfolioData;

    const categories = [
        { name: "Languages", items: skills.languages },
        { name: "Web Development", items: skills.web },
        { name: "Core CS", items: skills.core },
        { name: "Tools & Platforms", items: skills.tools },
    ];

    return (
        <Section id="skills" className="bg-slate-50 dark:bg-slate-900/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                    Skills
                </h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hover:-translate-y-1 transition-transform duration-300"
                    >
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 border-b pb-2 border-indigo-100 dark:border-indigo-900">
                            {category.name}
                        </h3>
                        <ul className="space-y-2">
                            {category.items.map((skill) => (
                                <li
                                    key={skill}
                                    className="flex items-center text-slate-600 dark:text-slate-300"
                                >
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
