"use client";
import React, { useEffect } from "react";
import Link from "next/link";


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

// export default Blog;
const Blog = () => {
  const [tree, setTree] = React.useState<MarkdownTreeNode | null>(null);
  useEffect(() => {
    fetch("/api/blog-tree")
      .then((res) => res.json())
      .then(setTree)
  }, [])
  if (!tree) {
    return (
      <div className="w-full xl:ml-[25%] xl:w-3/5 xl:h-screen px-4 py-10 animate-pulse text-center text-gray-500 dark:text-gray-400">
        <div className="text-2xl font-semibold mb-4">📚 Preparing your blog content...</div>
        <div className="text-md">Loading categories and articles, please wait...</div>
      </div>
    );
  }

  // Run at server side or preload
  const renderTree = (node: MarkdownTreeNode, path = "") => {
    if (node.type === "files") {
      return (
        <div className=" space-y-2 mb-5">
          {node.children.map((file) => (
            <Link
              key={file.slug}
              href={`/blog/${file.slug}`}
              className="block hover:underline border-b-2 border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-sm transition-all duration-300"
            >
              <div className="pl-4">
                {/* Titles */}
                <h3 className="text-lg font-semibold">{file.title}</h3>
                <p className="text-sm text-gray-500">{file.slug}</p>
              </div>
            </Link>
          ))}
        </div>
      );
    }

    if (node.type === "folder" && path.split("/").length === 1) {
      const categoryImage = `/${node.name.replace(/ /g, "-")}.jpeg`;

      return (
        <div key={path} className="mb-6 rounded-xl shadow-lg overflow-hidden">
          <img
            src={categoryImage}
            alt={node.name}
            className="w-[100%] h-[40vh] object-cover rounded-t-xl"
          />
          {/* First Category */}
          <h1 className="ml-5 mt-2.5 mb-2.5 text-3xl font-semibold ">{node.name}</h1>
          <div className="p-2 border-t-2 border-gray-500">
            {Object.entries(node.children).map(([key, childNode]) => {
              const childPath = path ? `${path}/${key}` : key;
              return <div key={childPath}>{renderTree(childNode, childPath)}</div>;
            })}
          </div>
        </div>
      );
    }

    // Folder
    return (
      <div key={path} className="pl-3">
        {/* subCategory */}
        <h2 className="text-2xl font-semibold border-b-2 border-gray-400">{node.name}</h2>
        <div className="">
          {Object.entries(node.children).map(([key, childNode]) => {
            const childPath = path ? `${path}/${key}` : key;
            return <div key={childPath}>{renderTree(childNode, childPath)}</div>;
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full xl:ml-[25%] xl:w-3/5 xl:h-screen xl:overflow-y-scroll px-2 sm:px-4 mt-4 xl:mt-6 pb-30 scroll-smooth">
      {Object.entries(tree.children).map(([key, childNode]) =>
        renderTree(childNode, key)
      )}
    </div>
  );
};

export default Blog;