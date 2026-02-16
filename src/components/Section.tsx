import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export const Section = ({ id, className, children, ...props }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
};
