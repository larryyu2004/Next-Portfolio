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

      <nav className="fixed ml-[75%] w-1/4 h-screen overflow-y-scroll pl-4 pb-30">

      <ul className="mt-10">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`${
              heading.level === 1 ? "font-bold mb-1" : heading.level === 2? "font-semibold pl-5 mb-2": "font-semiblod pl-10 mb-2"
            } `}
          >
            <a href={`#${heading.id}`} className="hover:underline">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    </>
  );
}
