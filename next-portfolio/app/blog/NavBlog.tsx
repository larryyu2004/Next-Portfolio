"use client";
import { head } from "motion/react-client";
import React from "react";
import { useEffect, useState } from "react";

type Heading = { id: string; text: string; level: number };

export default function NavBlog() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h1, h2, h3")
    ) as HTMLElement[];

    const newHeadings: Heading[] = headingElements.map((heading, index) => {
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
    console.log(newHeadings);
    setHeadings(newHeadings);
  }, []);
  return (
    <>
      <nav className="fixed right-0 w-1/4 h-screen overflow-y-auto border-l border-gray-300 bg-[rgb(244,244,246)] dark:bg-[rgb(9,9,10)] px-6 py-8 shadow-lg hidden xl:block pb-20">
        <div className="text-xl font-bold mb-6 border-b-2 border-gray-200 pb-2 text-gray-800">
          Blog Navigation
        </div>
        <ul className="space-y-3 text-sm text-gray-700">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`
                  block rounded-md px-2 py-1 transition-all duration-200
                  ${
                    heading.level === 1
                      ? "text-2xl font-bold bg-gray-300 hover:bg-gray-400"
                      : ""
                  }
                  ${
                    heading.level === 2
                      ? "text-xl pl-4 font-semibold bg-gray-200 hover:bg-gray-300"
                      : ""
                  }
                  ${
                    heading.level === 3
                      ? "text-lg pl-8 font-semibold text-gray-600 hover:bg-gray-200"
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
