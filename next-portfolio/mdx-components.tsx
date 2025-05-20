import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Tip from "./markdownComponent/Tip";
import Key from "./markdownComponent/Key";
import { Component } from "react";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-4 mb-4 border-b border-gray-300 pb-2">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-15 mb-3 border-b border-gray-200 pb-1">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-normal mt-2 mb-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-normal mt-1 mb-1">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="my-2 leading-7 text-gray-800 dark:text-white">{children}</p>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-decimal ml-6 my-2">{children}</ol>
    ),
    li: ({ children }) => <li className="my-1">{children}</li>,
    pre: (props) => {
      // Check if children is a valid React element and has props
      const child = props.children as React.ReactElement<any>;
      const className = child?.props?.className || "";
      const languageMatch = className.match(/language-(\w+)/);
      const language = languageMatch ? languageMatch[1] : null;

      return (
        <div className="relative border border-gray-300 rounded-lg my-4">
          {language && (
            <div className="absolute text-lg border-b-2 border-gray-300 min-w-full bg-[rgb(244,244,246)]  px-4 py-1 rounded-t-lg z-10">
              {language}
            </div>
          )}

          <pre
            {...props}
            className={`rounded overflow-x-auto mt-9 ${className}`}
          >
            {child}
          </pre>
        </div>
      );
    },
    code: ({ children, className }) => {
      const isInline = !className;

      if (isInline) {
        return (
          <code className="bg-gray-200 dark:bg-gray-600 font-mono text-sm px-2 rounded">
            {children}
          </code>
        );
      }

      // For block code, return without custom styles
      return <code className={className}>{children}</code>;
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        className="rounded my-4"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),

    Tip,
    Key,
    ...components,
  };
}
