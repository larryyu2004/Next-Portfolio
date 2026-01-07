"use client";
import React from "react";
import Link from "next/link";
import { MarkdownTreeNode } from "@/lib/buildMarkdownTree";
import { Accordion, AccordionTrigger, AccordionContent, AccordionChevron } from "./TopicAccordion";

const FolderIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const FileIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export default function NavBlog({ tree }: { tree: MarkdownTreeNode }) {
  const renderNavTree = (node: MarkdownTreeNode, path = "") => {
    // 1. Files
    if (node.type === "files") {
      return (
        <div className="pl-4 border-l border-gray-100 dark:border-gray-800 ml-2 space-y-1 mt-1">
          {node.children.map((file) => (
            <Link
              key={file.slug}
              href={`/blog/${file.slug}`}
              className="group flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              <FileIcon className="text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
              <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                {file.title}
              </span>
            </Link>
          ))}
        </div>
      );
    }

    // 2. Folders
    return (
      <div className="mb-2">
        <Accordion defaultOpen={false}>
          <AccordionTrigger>
             <div className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors group">
              <FolderIcon className="text-blue-500/80 group-hover:text-blue-500 transition-colors flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-1 line-clamp-1">
                {node.name}
              </span>
              <div className="text-gray-400">
                <AccordionChevron className="w-4 h-4" />
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pl-2">
              {Object.entries(node.children).map(([key, childNode]) => {
                const childPath = path ? `${path}/${key}` : key;
                return <div key={childPath}>{renderNavTree(childNode, childPath)}</div>;
              })}
            </div>
          </AccordionContent>
        </Accordion>
      </div>
    );
  };

  return (
    <nav className="w-full bg-white dark:bg-slate-900/80 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700/60 p-5 sticky top-20 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 dark:border-slate-700 pb-2">
        Blog Navigation
      </div>
      <div className="space-y-1">
        {Object.entries(tree.children).map(([key, childNode]) =>
          renderNavTree(childNode, key)
        )}
      </div>
    </nav>
  );
}
