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
    <nav className="fixed ml-[75%] w-1/4 h-screen overflow-y-scroll pl-4 mt-6 pb-30">
      <Link
        href={"/blog"}
        className="fixed z-10 w-[23%] bg-[rgb(244,244,246)] dark:bg-[rgb(9,9,10)] border-b-1 flex  hover:underline transition-all duration-300"
      >
        <SquareChevronLeftIcon />
        <h1 className="font-bold pt-2 ">Back to Blog</h1>
      </Link>

      <ul className="mt-15">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`${
              heading.level === 3 ? "pl-7 mb-3" : "font-bold mb-3"
            } `}
          >
            <a href={`#${heading.id}`} className="hover:underline">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
