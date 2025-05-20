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
        <h1 className="text-xl font-semibold hover:underline pt-2 cursor-pointer">Back to Blog</h1>
      </Link>

      <ul className="mt-15">
        {headings.map((heading) => (
          <a href={`#${heading.id}`} key={heading.id} className="">
          <li
            
            className={`${
              heading.level === 3 ? "text-lg pl-8 font-semibold text-gray-600 hover:bg-gray-200" : "text-xl pl-4 font-bold bg-gray-200 hover:bg-gray-300"
            } px-2 py-1 block rounded-md mb-3 cursor-pointer`}
          >
            
              {heading.text}
            
          </li>
          </a>
        ))}
      </ul>
    </nav>
  );
}
