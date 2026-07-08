"use client";

import { motion, type MotionProps } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = MotionProps & {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
