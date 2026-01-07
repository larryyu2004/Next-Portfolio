import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMarkdownTree } from "@/lib/buildMarkdownTree";

export type MarkdownTreeNode =
  | {
      type: "folder";
      name: string;
      children: Record<string, MarkdownTreeNode>;
    }
  | {
      type: "files";
      name: string;
      children: {
        title: string;
        slug: string;
        categories: string[];
      }[];
    };

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const FolderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2 text-blue-500"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const Blog = async () => {
  const tree = buildMarkdownTree();

  const renderTree = (node: MarkdownTreeNode, path = "") => {
    // 1. Render Files (Leaf Nodes)
    if (node.type === "files") {
      return (
        <div className="grid gap-4 mb-8">
          {node.children.map((file) => (
            <Link
              key={file.slug}
              href={`/blog/${file.slug}`}
              className="group relative block p-5 bg-white dark:bg-slate-800/80 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 pr-4">
                  {/* Breadcrumb / Category Tag */}
                  <div className="flex items-center gap-2 mb-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {file.categories.slice(0, -1).join(" / ")}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {file.title}
                  </h3>
                  
                  {/* Slug / Description placeholder */}
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 font-mono opacity-60">
                     {/* We could put a description here if we had one, for now use slug end */}
                     .../{file.slug.split('/').pop()}
                  </p>
                </div>
                
                <div className="text-gray-300 dark:text-gray-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all duration-300">
                  <ChevronRight />
                </div>
              </div>
            </Link>
          ))}
        </div>
      );
    }

    // 2. Render Top-Level Categories (Main Folders)
    if (node.type === "folder" && path.split("/").length === 1) {
      const categoryImage = `/${node.name.replace(/ /g, "-")}.jpeg`;

      return (
        <div key={path} className="mb-12">
          {/* Category Banner Card */}
          <div className="group relative rounded-2xl overflow-hidden shadow-xl mb-6">
            <div className="relative w-full h-72">
               <Image
                src={categoryImage}
                alt={node.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8">
                 <h1 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
                    {node.name}
                 </h1>
                 <p className="text-gray-200 mt-2 text-sm font-medium uppercase tracking-widest opacity-90">
                    Collection
                 </p>
              </div>
            </div>
          </div>

          {/* Render Children */}
          <div className="space-y-6">
            {Object.entries(node.children).map(([key, childNode]) => {
              const childPath = path ? `${path}/${key}` : key;
              return <div key={childPath}>{renderTree(childNode, childPath)}</div>;
            })}
          </div>
        </div>
      );
    }

    // 3. Render Sub-Categories (Inner Folders)
    return (
      <div key={path} className="pl-2 mt-8">
        <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700/50">
          <FolderIcon />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">
            {node.name}
          </h2>
        </div>
        
        <div className="pl-4 border-l-2 border-gray-100 dark:border-gray-800 ml-2.5">
          {Object.entries(node.children).map(([key, childNode]) => {
            const childPath = path ? `${path}/${key}` : key;
            return <div key={childPath}>{renderTree(childNode, childPath)}</div>;
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full xl:h-[calc(100vh-120px)] xl:overflow-y-scroll px-2 sm:px-6 pb-32 scroll-smooth no-scrollbar">
      {Object.entries(tree.children).map(([key, childNode]) =>
        renderTree(childNode, key)
      )}
    </div>
  );
};

export default Blog;