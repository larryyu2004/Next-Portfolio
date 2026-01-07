import { notFound } from "next/navigation";
import  {buildMarkdownTree, type MarkdownTreeNode } from "@/lib/buildMarkdownTree";
import TableOfContent from "./TableOfContent";
import NavWeb from "@/app/_nav/nav-web/page";
import NavPhone from "@/app/_nav/nav-phone/NavPhone";
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
      <main className="h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-zinc-800 overflow-hidden">
        {/* Responsive Navigation */}
        <div className="block md:hidden"><NavPhone /></div>
        <div className="hidden md:block"><NavWeb /></div>
        
        <div className="mt-[25px] xl:mt-[25px] px-2 sm:px-4 py-8 w-full h-full box-border">
          <div className="flex flex-col xl:flex-row gap-6 max-w-[1920px] mx-auto h-full">
            
            {/* Left Gutter / Sidebar (Space for future features or back nav on mobile) */}
            <div className="hidden xl:block xl:w-1/5">
               {/* Could add a "Related Posts" or similar sidebar here later */}
            </div>

            {/* Main Content */}
            <div className="w-full xl:w-3/5 xl:h-[calc(100vh-120px)] xl:overflow-y-scroll px-2 pb-32 scroll-smooth custom-scrollbar">
              <div className="bg-white dark:bg-slate-900/80 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700/60 p-6 md:p-12 mb-10 backdrop-blur-sm">
                <article className="prose prose-lg dark:prose-invert max-w-none">
                  <Post />
                </article>
                
                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-slate-700/60 flex flex-col items-center">
                  <div className="text-gray-400 dark:text-gray-500 font-medium text-sm uppercase tracking-widest mb-4">
                    End of Post
                  </div>
                  <Link
                    href={"/blog"}
                    className="px-6 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded-full font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                  >
                    Back to Blog
                  </Link>
                </div>
              </div>
            </div>

            {/* Table of Content - Right Sidebar */}
            <div className="hidden xl:block w-1/5">
              <TableOfContent />
            </div>
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