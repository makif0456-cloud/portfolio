import React from "react";
import { Section } from "./Section";
import { portfolioData } from "@/data";

export function About() {
    const { title, description } = portfolioData.about;

    return (
        <Section id="about" className="bg-slate-50 dark:bg-slate-900/50">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                    {title}
                </h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                ))}
            </div>
        </Section>
    );
}
