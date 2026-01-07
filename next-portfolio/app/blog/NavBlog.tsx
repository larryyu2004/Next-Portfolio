"use client";
import React, { useEffect, useState } from "react";

type Heading = { id: string; text: string; level: number };

export default function NavBlog() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const waitForHeadings = () => {
      const headings = document.querySelectorAll("h1, h2, h3");
      if (headings.length > 0) {
        // Headings are in the DOM — proceed
        const headingElements = Array.from(headings) as HTMLElement[];

        const newHeadings = headingElements.map((heading, index) => {
          const basedId = heading.innerText
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");

          const uniqueId = `${basedId}-${index}`;
          heading.id = uniqueId;

          return {
            id: uniqueId,
            text: heading.innerText,
            level: heading.tagName === "H1" ? 1 : heading.tagName === "H2" ? 2 : 3,
          };
        });

        setHeadings(newHeadings);
      } else {
        // Try again in a few ms
        setTimeout(waitForHeadings, 50);
      }
    };

    waitForHeadings();
  }, []);

  if (headings.length === 0) {
    return (
      <nav className="w-full bg-white dark:bg-slate-900/80 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700/60 p-5 sticky top-20">
        <div className="space-y-4 animate-pulse">
          <div className="h-4 w-1/3 bg-gray-200 dark:bg-slate-700 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-3 w-3/4 bg-gray-100 dark:bg-slate-800 rounded"></div>
            <div className="h-3 w-1/2 bg-gray-100 dark:bg-slate-800 rounded ml-2"></div>
            <div className="h-3 w-2/3 bg-gray-100 dark:bg-slate-800 rounded"></div>
            <div className="h-3 w-1/3 bg-gray-100 dark:bg-slate-800 rounded ml-2"></div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="w-full bg-white dark:bg-slate-900/80 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700/60 p-5 sticky top-20 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 dark:border-slate-700 pb-2">
        On This Page
      </div>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`
                block text-sm transition-colors duration-200 border-l-2
                ${
                  heading.level === 1
                    ? "font-bold text-gray-900 dark:text-gray-100 border-transparent hover:border-blue-500 pl-3 py-1"
                    : ""
                }
                ${
                  heading.level === 2
                    ? "font-medium text-gray-600 dark:text-gray-400 border-transparent hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 pl-3 ml-1 py-1"
                    : ""
                }
                ${
                  heading.level === 3
                    ? "text-gray-500 dark:text-gray-500 border-transparent hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 pl-3 ml-3 py-1 text-xs"
                    : ""
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
