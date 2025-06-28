import { notFound } from "next/navigation";
import { buildMarkdownTree, MarkdownTreeNode } from "../Blog";
import TableOfContent from "./TableOfContent";
import NavWeb from "@/app/_nav/page";
import { BookTextIcon } from "./BookIcon";
import Link from "next/link";

type PageProps = {
  params: { slug: string[] };
};

export default async function Page({ params }: PageProps) {
  const slugPath = params.slug?.join("/") || "";

  try {
    const { default: Post } = await import(`@/markdown/${slugPath}.mdx`);
    return (
      <>
        <main>
          <NavWeb />
          <div className="mt-[45px] fixed">
            <div className="flex">
              <div className="fixed w-3/4 h-screen px-4 mt-6 pb-30 overflow-y-scroll scroll-smooth">
                <Post />

                <div className="flex justify-center font-bold"> -- End -- </div>
                <Link
                  href={"/blog"}
                  className="flex justify-center items-center hover:underline transition-all duration-300 mt-10"
                >
                  <BookTextIcon />
                  <div className="font-semibold">Back to Blog</div>
                </Link>
              </div>

              <TableOfContent />
            </div>
          </div>
        </main>
      </>
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