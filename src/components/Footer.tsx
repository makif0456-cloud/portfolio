import React from "react";
import { portfolioData } from "@/data";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
    const { footer, contact } = portfolioData;

    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                <div className="flex space-x-6">
                    <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                    >
                        <span className="sr-only">GitHub</span>
                        <Github className="h-6 w-6" />
                    </a>
                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                    >
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                        href={`mailto:${contact.email}`}
                        className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                    >
                        <span className="sr-only">Email</span>
                        <Mail className="h-6 w-6" />
                    </a>
                </div>

                <p className="text-center text-base text-slate-400 dark:text-slate-500">
                    &copy; {new Date().getFullYear()} {footer.text}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
