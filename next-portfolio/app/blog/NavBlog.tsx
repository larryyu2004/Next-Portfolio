"use client";
import React from "react";
import { useEffect, useState } from "react";

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
      <nav className="fixed right-0 w-1/4 h-screen overflow-y-auto border-l border-gray-300 bg-[rgb(244,244,246)] dark:bg-[rgb(9,9,10)] px-6 py-8 shadow-lg hidden xl:block pb-20">
        <div className="space-y-4">
          <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-2/3 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          <p className="text-gray-500 font-bold dark:text-gray-400 text-center mt-4">
            Loading navigation...
          </p>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className="fixed right-0 w-1/4 h-screen overflow-y-auto border-l border-gray-300 bg-[rgb(244,244,246)] dark:bg-[rgb(9,9,10)] px-6 py-8 shadow-lg hidden xl:block pb-50">
        <div className="text-2xl font-semibold mb-6 pb-3 border-b border-gray-300 tracking-wide">
          Blog Navigation
        </div>
        <ul className="space-y-3 text-sm">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`
                  block rounded-md px-2 py-1 transition-all duration-200
                  ${
                    heading.level === 1
                      ? "text-2xl font-bold bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                      : ""
                  }
                  ${
                    heading.level === 2
                      ? "text-xl pl-4 font-semibold bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                      : ""
                  }
                  ${
                    heading.level === 3
                      ? "text-lg pl-8 font-semibold dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800"
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
    </>
  );
}
