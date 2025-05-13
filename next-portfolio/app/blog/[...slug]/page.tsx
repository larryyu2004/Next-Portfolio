import { notFound } from "next/navigation";
import { getMdxFiles } from "../Blog";
import TableOfContent from "./TableOfContent";
import NavWeb from "@/app/_nav/page";
import Intro from "../Intro";
type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const slugPath = slug?.join("/") || "";

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

export async function generateStaticParams() {
  const posts = getMdxFiles();

  return posts.map((post) => ({
    slug: post.slug.split("/"),
  }));
}

export const dynamicParams = false;
