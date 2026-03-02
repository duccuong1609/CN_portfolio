import React from "react";

import { cn } from "@/lib/utils";

interface ResumeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function ResumeButton({
  children,
  className = "",
  ...props
}: ResumeButtonProps) {
  return (
    <button
      className={cn(
        "cursor-pointer border border-primary text-primary bg-transparent",
        "px-4 py-2 rounded-sm text-sm font-mono",
        "shadow-none hover:shadow-[3px_3px_0_0_var(--color-primary)]",
        "transition-all duration-300 ease-in-out",
        "hover:-translate-x-1 hover:-translate-y-1",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
