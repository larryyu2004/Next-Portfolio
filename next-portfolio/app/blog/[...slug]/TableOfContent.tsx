"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SquareChevronLeftIcon } from "./BackIcon";

type Heading = { id: string; text: string; level: number };

export default function TableOfContent() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h2, h3")
    ) as HTMLHeadElement[];

    const newHeadings: Heading[] = headingElements.map((heading, index) => {
      const baseId = heading.innerText
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");

      const uniqueId = `${baseId}-${index}`;
      heading.id = uniqueId;

      return {
        id: uniqueId,
        text: heading.innerText,
        level: heading.tagName === "H2" ? 2 : 3,
      };
    });

    setHeadings(newHeadings);
  }, []);

  return (
    <nav className="w-full bg-white dark:bg-slate-900/80 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700/60 p-5 sticky top-24 max-h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar">
      {/* Header / Back Link */}
      <div className="mb-6 pb-4 border-b border-gray-100 dark:border-slate-700/60">
        <Link
          href={"/blog"}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
        >
          <div className="transform group-hover:-translate-x-1 transition-transform duration-200">
             <SquareChevronLeftIcon />
          </div>
          <span className="font-semibold text-sm">Back to Blog</span>
        </Link>
      </div>

      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 pl-1">
        Table of Contents
      </div>

      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`
                block text-sm transition-all duration-200 border-l-2 py-1.5
                ${
                  heading.level === 2
                    ? "font-medium text-gray-700 dark:text-gray-300 border-transparent hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 pl-3"
                    : "text-gray-500 dark:text-gray-500 border-transparent hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 pl-3 ml-3 text-xs"
                }
              `}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
