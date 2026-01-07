"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface AccordionContextType {
  isOpen: boolean;
  toggle: () => void;
}

const AccordionContext = createContext<AccordionContextType>({
  isOpen: false,
  toggle: () => {},
});

export function Accordion({
  children,
  defaultOpen = false,
  className = "",
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <AccordionContext.Provider value={{ isOpen, toggle: () => setIsOpen(!isOpen) }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { toggle } = useContext(AccordionContext);
  return (
    <div onClick={toggle} className={`cursor-pointer select-none ${className}`}>
      {children}
    </div>
  );
}

export function AccordionContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { isOpen } = useContext(AccordionContext);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`overflow-hidden ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function AccordionChevron({ className = "" }: { className?: string }) {
  const { isOpen } = useContext(AccordionContext);
  return (
    <div
      className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""} ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </div>
  );
}