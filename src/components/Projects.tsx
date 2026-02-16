import React from "react";
import { Section } from "./Section";
import { portfolioData } from "@/data";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";

export function Projects() {
    const { projects } = portfolioData;

    return (
        <Section id="projects" className="bg-white dark:bg-slate-950">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                    Projects
                </h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    A selection of my recent works
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 group"
                    >
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                                    <FolderGit2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div className="flex gap-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                                            aria-label="View on GitHub"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                                            aria-label="View Live Demo"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
