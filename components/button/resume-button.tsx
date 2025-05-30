import React from "react";
import { Button } from "@heroui/button";

import { ResumeButtonProps } from "@/dto/button-object";

export default function ResumeButton({
  children,
  className = "",
  size = "md",
  ...props
}: ResumeButtonProps) {
  return (
    <Button
      className={`
        shadow-none 
        hover:shadow-[3px_3px_0_0_hsl(var(--heroui-primary))] 
        transition-[box-shadow,transform] 
        !duration-500 
        ease-in-out 
        border-primary 
        hover:-translate-x-1 
        hover:-translate-y-1 
        ${className}
      `}
      radius="sm"
      size={size}
      variant="ghost"
      {...props}
    >
      {children}
    </Button>
  );
}
