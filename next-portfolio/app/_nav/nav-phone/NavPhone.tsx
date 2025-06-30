'use client'
import React, { useState } from "react";
import Link from "next/link";

const NavPhone = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 block md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow">
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold">LYU</Link>
        <button
          className="flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-black dark:bg-white mb-1 transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-black dark:bg-white mb-1 transition-opacity ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-black dark:bg-white transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      {open && (
        <div className="flex flex-col items-center space-y-4 pb-4 animate-fade-in">
          <Link href="/" className="text-lg font-semibold" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/projects" className="text-lg font-semibold" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/blog" className="text-lg font-semibold" onClick={() => setOpen(false)}>Blog</Link>
        </div>
      )}
    </nav>
  );
};

export default NavPhone; 