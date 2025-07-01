import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const MARKDOWN_DIR = path.join(process.cwd(), "markdown");

export type MarkdownTreeNode =
  | { type: "folder"; name: string; children: Record<string, MarkdownTreeNode> }
  | {
      type: "files";
      name: string;
      children: { title: string; slug: string; categories: string[] }[];
    };

function buildMarkdownTree (
    dir: string = MARKDOWN_DIR,
    relativePath: string[] = []
): MarkdownTreeNode {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    const children: Record<string, MarkdownTreeNode> = {}
    const files: {
        title: string;
        slug: string;
        categories: string[];
    }[] = [];

    for (const entry of entries) {
        const entryName = entry.name.replace(/\.mdx$/, "");
        const fullPath = path.join(dir, entry.name);

        if(entry.isDirectory()) {
            // Recursively build tree for subfolder
            children[entryName] = buildMarkdownTree(fullPath, [...relativePath, entryName]);
        } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
            // Collect file info
            files.push({
                title: entryName.replace(/-/g, " "),
                slug: [...relativePath, entryName].join("/"),
                categories: [...relativePath],
            })
        }
    }

    // If there are any files, add a special 'files' child folder node
    if(files.length > 0) {
        children["files"] = {
            type: "files",
            name: "files",
            children: files,
        }
    }

    return {
        type: "folder",
        name: relativePath[relativePath.length - 1] || "root",
        children,
    }
}

export async function GET() {
    const tree = buildMarkdownTree();
    return NextResponse.json(tree);
}