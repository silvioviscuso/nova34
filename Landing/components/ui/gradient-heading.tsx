"use client";

import { createElement, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GradientHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?: "primary" | "secondary" | "accent";
  children: React.ReactNode;
}

export function GradientHeading({
  as = "h2",
  variant = "primary",
  children,
  className,
  ...props
}: GradientHeadingProps) {
  const gradientClass = {
    primary: "gradient-primary",
    secondary: "gradient-secondary",
    accent: "gradient-accent",
  };

  return createElement(
    as,
    {
      className: cn("gradient-text", gradientClass[variant], className),
      ...props,
    },
    children
  );
}