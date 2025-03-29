"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface StaggerChildrenProps {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export function StaggerChildren({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = "",
  once = true,
  threshold = 0.1,
}: StaggerChildrenProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}