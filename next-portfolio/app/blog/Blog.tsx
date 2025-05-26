import React from "react";
import fs from "fs";
import path from "path";
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

const MARKDOWN_DIR = path.join(process.cwd(), "markdown");

export function buildMarkdownTree(
  dir: string = MARKDOWN_DIR,
  relativePath: string[] = []
): MarkdownTreeNode {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const children: Record<string, MarkdownTreeNode> = {};
  const files: {
    title: string;
    slug: string;
    categories: string[];
  }[] = [];

  for (const entry of entries) {
    const entryName = entry.name.replace(/\.mdx$/, "");
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      children[entryName] = buildMarkdownTree(fullPath, [...relativePath, entryName]);
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      files.push({
        title: entryName.replace(/-/g, " "),
        slug: [...relativePath, entryName].join("/"),
        categories: [...relativePath],
      });
    }
  }

  // Add files node as a child folder to preserve folder structure
  if (files.length > 0) {
    children["files"] = {
      type: "files",
      name: "files",
      children: files,
    };
  }

  return {
    type: "folder",
    name: relativePath[relativePath.length - 1] || "root",
    children,
  };
}

// export default Blog;
const Blog = () => {
  const tree = buildMarkdownTree(); // Run at server side or preload
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
    <div className="fixed ml-[25%] w-1/2 h-screen overflow-y-scroll px-4 mt-6 pb-15 scroll-smooth">
      {Object.entries(tree.children).map(([key, childNode]) =>
        renderTree(childNode, key)
      )}
    </div>
  );
};

export default Blog;