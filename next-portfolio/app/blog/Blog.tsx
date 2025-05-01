import React from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
type MdxFile = {
  slug: string;
  title: string;
  category: string;
};

export function getMdxFiles(dir = "markdown", basePath = ""): MdxFile[] {
  const dirPath = path.join(process.cwd(), dir);
  let entries;
  try {
    entries = fs.readdirSync(dirPath, { withFileTypes: true });
  } catch (err) {
    console.error(`Error reading directory ${dirPath}:`, err);
    return [];
  }

  return entries.flatMap((entry) => {
    const relativePath = path.join(basePath, entry.name);
    if (entry.isDirectory()) {
      return getMdxFiles(path.join(dir, entry.name), relativePath);
    }

    if (entry.isFile() && entry.name.endsWith(".mdx")) {
      const slug = relativePath.replace(/\.mdx$/, "");
      const title = slug.split("/").pop()?.replace(/-/g, " ") ?? slug;
      const category = path.dirname(relativePath).replace(/-/g, " ");

      return [
        {
          slug,
          title,
          category,
        },
      ];
    }

    return [];
  });
}
const Blog = () => {
  const posts = getMdxFiles();

  type Post = {
    slug: string;
    title: string;
    category: string;
  };
  const grouped = new Map<string, Post[]>();
  for (const post of posts) {
    const category = post.category || "Uncategorized";
    if (!grouped.has(category)) {
      grouped.set(category, []);
    }
    grouped.get(category)?.push(post);
  }
  return (
    <div className="fixed ml-[25%] w-1/2 h-screen overflow-y-scroll px-4 mt-6 pb-15">
      
      {[...grouped.entries()].map(([category, categoryPosts]) => {
        const imageName = category.replace(/ /g, "-");
        const imagePath = `/${imageName}.jpeg`;

        return (
          <div key={category} className="mb-10 flex flex-col rounded-xl shadow-xl">
            <img
              src={imagePath} // Need to use .src when not using Image component
              alt="Larry's Profile Picture"
              className="w-[100%] h-[40vh] object-cover rounded-t-xl"
            />
            <h1 className="ml-5 mt-2.5 mb-2.5 text-3xl font-semibold ">
              {category === "." ? "Uncategorized" : category}
            </h1>

            <div className="p-3 border-t-2 border-gray-200">
              {categoryPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-lg border mb-3 hover:border-blue-500 transition-colors"
                >
                  <h3 className="text-2xl p-4 font-semibold capitalize">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
