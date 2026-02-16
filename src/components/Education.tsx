import React from "react";
import { Section } from "./Section";
import { portfolioData } from "@/data";
import { GraduationCap } from "lucide-react";

export function Education() {
    const { education } = portfolioData;

    return (
        <Section id="education" className="bg-white dark:bg-slate-950">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                    Education
                </h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-800">
                {education.map((edu, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-950 bg-indigo-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <GraduationCap className="w-5 h-5 text-white" />
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                                <h3 className="font-bold text-slate-900 dark:text-white text-lg">{edu.degree}</h3>
                                <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-0.5 rounded-full mt-2 sm:mt-0">
                                    {edu.year}
                                </span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 font-medium mb-3">{edu.institute}</p>
                            <div className="flex flex-col gap-2 mb-4">
                                <span className="text-sm text-slate-500 dark:text-slate-400 italic">{edu.status}</span>
                            </div>

                            {edu.focus && (
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Focus Areas:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.focus.map((tech, i) => (
                                            <span key={i} className="px-2 py-1 text-xs font-semibold tracking-wide text-indigo-700 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-900/30 rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
