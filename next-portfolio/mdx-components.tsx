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
      <h1 className="text-4xl md:text-5xl font-extrabold mt-12 mb-6 text-gray-900 dark:text-white tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-800 dark:text-gray-100 pb-2 border-b border-gray-100 dark:border-gray-800">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-800 dark:text-gray-200">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-medium mt-6 mb-2 text-gray-800 dark:text-gray-300">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="my-4 leading-relaxed text-gray-700 dark:text-gray-300 text-lg">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 hover:underline decoration-blue-300 underline-offset-2 transition-colors"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc ml-6 my-4 space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal ml-6 my-4 space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="pl-1 marker:text-gray-400 dark:marker:text-gray-500">{children}</li>
    ),
    pre: (props) => {
      // Check if children is a valid React element and has props
      const child = props.children as React.ReactElement<any>;
      const className = child?.props?.className || "";
      const languageMatch = className.match(/language-(\w+)/);
      const language = languageMatch ? languageMatch[1] : "text";

      return (
        <div className="relative rounded-xl overflow-hidden my-8 shadow-lg border border-gray-200 dark:border-gray-700/50">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-1.5">
               <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
               <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
            </div>
            <span className="text-xs font-mono font-medium text-gray-500 dark:text-gray-400 uppercase">
              {language}
            </span>
          </div>
          <div className="bg-gray-50 dark:bg-[#0d1117] p-4 overflow-x-auto text-sm leading-6">
            <pre {...props} className={`font-mono ${className} !bg-transparent !p-0 !m-0`}>
              {child}
            </pre>
          </div>
        </div>
      );
    },
    code: ({ children, className }) => {
      const isInline = !className;

      if (isInline) {
        return (
          <code className="bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded-md font-mono text-sm border border-blue-100 dark:border-slate-700/50">
            {children}
          </code>
        );
      }

      // For block code, return without custom styles (handled by pre)
      return <code className={`${className}`}>{children}</code>;
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-900/10 py-3 px-5 my-6 rounded-r-lg italic text-gray-700 dark:text-gray-300">
        {children}
      </blockquote>
    ),
    img: (props) => (
      <div className="my-8 rounded-xl overflow-hidden shadow-md">
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
          className="object-cover w-full h-auto"
          style={{ width: "100%", height: "auto" }}
          {...(props as ImageProps)}
        />
      </div>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-8 rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="w-full border-collapse text-left text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-50 dark:bg-slate-800/50 text-gray-900 dark:text-gray-100 font-semibold border-b border-gray-200 dark:border-gray-700">
        {children}
      </thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">{children}</tbody>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-gray-50 dark:hover:bg-slate-800/30 transition-colors">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="p-3 font-semibold tracking-wide">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="p-3 text-gray-600 dark:text-gray-300 whitespace-nowrap md:whitespace-normal">
        {children}
      </td>
    ),

    Tip,
    Key,
    ...components,
  };
}
