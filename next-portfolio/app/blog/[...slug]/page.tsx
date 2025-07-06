import { notFound } from "next/navigation";
import  {buildMarkdownTree, type MarkdownTreeNode } from "@/lib/buildMarkdownTree";
import TableOfContent from "./TableOfContent";
import NavWeb from "@/app/_nav/nav-web/page";
import NavPhone from "@/app/_nav/nav-phone/NavPhone";
import { BookTextIcon } from "./BookIcon";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const slugPath = slug?.join("/") || "";

  try {
    const { default: Post } = await import(`@/markdown/${slugPath}.mdx`);
    return (
      <main className="md:fixed h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
        {/* Responsive Navigation */}
        <div className="block md:hidden"><NavPhone /></div>
        <div className="hidden md:block"><NavWeb /></div>
        <div className="mt-[60px] px-2 sm:px-4 py-8">
          <div className="flex flex-col xl:flex-row gap-6 ">
            {/* Main content */}
            <div className="w-full xl:w-3/4 xl:h-screen xl:overflow-y-scroll px-2 sm:px-4 pb-10 scroll-smooth">
              <Post />
              <div className="flex justify-center font-bold"> -- End -- </div>
              <Link
                href={"/blog"}
                className="fixed flex z-20 bottom-4 left-4 right-4 xl:static xl:flex justify-center items-center hover:underline transition-all duration-300 mt-10 md:mb-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 xl:p-0 xl:bg-transparent xl:dark:bg-transparent shadow-lg xl:shadow-none"
              >
                <BookTextIcon />
                <div className="font-semibold">Back to Blog</div>
              </Link>
            </div>
            {/* Table of Content - only show on xl+ */}
            <div className="hidden xl:block"><TableOfContent /></div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error loading post:", error);
    return notFound();
  }
}

function getAllSlugs(node: MarkdownTreeNode): string[][] {
  if (node.type === "files") {
    return node.children.map((file) => file.slug.split("/"));
  }
  return Object.values(node.children).flatMap((child) => getAllSlugs(child));
}

export async function generateStaticParams() {
  const tree = buildMarkdownTree();
  const slugs = getAllSlugs(tree);

  return slugs.map((slugArray) => ({
    slug: slugArray,
  }));
}

export const dynamicParams = false;