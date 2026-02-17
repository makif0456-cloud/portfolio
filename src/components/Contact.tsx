"use client";

import React, { useState } from "react";
import { Section } from "./Section";
import { portfolioData } from "@/data";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
    const { contact } = portfolioData;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Use Formspree or similar service
        // Replace "YOUR_FORMSPREE_ID" with your actual Form ID from https://formspree.io/
        const FORMSPREE_ID = "xdalzjvy";

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Section id="contact" className="bg-slate-50 dark:bg-slate-900/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                    Get In Touch
                </h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Let's Connect
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col space-y-4">
                        <a
                            href={`mailto:${contact.email}`}
                            className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-indigo-600">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="text-lg">{contact.email}</span>
                        </a>

                        <a
                            href={contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-indigo-600">
                                <Github className="w-5 h-5" />
                            </div>
                            <span className="text-lg">GitHub</span>
                        </a>

                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-indigo-600">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            <span className="text-lg">LinkedIn</span>
                        </a>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                            placeholder="Your message here..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full flex items-center justify-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-lg transition-all hover:scale-[1.02] focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {status === "submitting" ? (
                            "Sending..."
                        ) : (
                            <>
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                            </>
                        )}
                    </button>
                    {status === "success" && (
                        <p className="text-green-600 dark:text-green-400 text-center mt-4 font-medium">Message sent successfully!</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-500 dark:text-red-400 text-center mt-4 font-medium">Failed to send message. Please try again.</p>
                    )}
                </form>
            </div>
        </Section>
    );
}
