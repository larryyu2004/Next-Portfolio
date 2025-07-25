// npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
// npm install rehype-highlight
// npm install rehype-slug
// npm install remark-gfm
import createMDX from '@next/mdx';
import type { NextConfig } from "next";
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const withMDX = createMDX({
  // Add any desired MDX plugins here
  extension: /\.mdx?$/,
  // rehypePlugins -> assign some colors to the code in the mdx.
  options: {
    remarkPlugins: [remarkGfm], 
    rehypePlugins: [rehypeSlug, rehypeHighlight],
  },
});


const nextConfig: NextConfig = {
  // allows .md and .mdx files to be treated as pages or components within your application.
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Other Next.js configurations
};

export default withMDX(nextConfig);
