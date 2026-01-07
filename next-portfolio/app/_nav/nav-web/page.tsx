"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { CpuIcon } from "../../HomeIcon";
import type { MarkdownTreeNode } from "@/lib/buildMarkdownTree";

type NavItem = {
  label: string;
  href: string;
  padding?: string;
};

export default function NavWeb() {
  const currentPath = usePathname();
  const [activeNav, setActiveNav] = useState<"home" | "projects" | "blog" | null>(null);
  const [blogCategories, setBlogCategories] = useState<NavItem[]>([]);
  const leaveTimeout = useRef<NodeJS.Timeout | null>(null);

  // Fetch blog categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/blog-categories");
        const data = await res.json();

        if (data.tree && "children" in data.tree) {
          const tree = data.tree as MarkdownTreeNode;
          if (tree.type === "folder") {
            const folders = Object.values(tree.children)
              .filter(
                (node): node is MarkdownTreeNode & { type: "folder" } =>
                  node.type === "folder"
              )
              .map((node) => ({
                label: node.name,
                href: `/blog#${node.name.toLowerCase().replace(/\s+/g, "-")}`,
              }));
            setBlogCategories(folders);
          }
        }
      } catch (error) {
        console.error("Failed to fetch blog categories", error);
      }
    };
    fetchCategories();
  }, []);

  const homeItems: NavItem[] = [
    { label: "Introduction", href: "/#home-introduction", padding: "pt-12" },
    { label: "Education", href: "/#home-education" },
    { label: "Projects", href: "/#homeprojects" },
    { label: "Skills", href: "/#home-skills", padding: "pb-12" },
  ];

  const projectItems: NavItem[] = [
    {
      label: "Operating System Engineering",
      href: "https://github.com/larryyu2004/XV-6-Lab",
      padding: "pt-12",
    },
    {
      label: "My Portfolio",
      href: "https://github.com/larryyu2004/my-portfolio",
    },
    {
      label: "My Leetcode",
      href: "/blog#leetcode-22",
    },
    {
      label: "Memory Pool",
      href: "https://github.com/larryyu2004/Memory-Pool",
      padding: "pb-12",
    },
  ];

  // Prepare blog items with padding
  const formattedBlogItems = blogCategories.map((item, index) => ({
    ...item,
    padding:
      index === 0
        ? "pt-12"
        : index === blogCategories.length - 1
        ? "pb-12"
        : undefined,
  }));

  const navLinks = [
    { key: "home", label: "Home", href: "/", items: homeItems },
    { key: "projects", label: "Projects", href: "/projects", items: projectItems },
    { key: "blog", label: "Blog", href: "/blog", items: formattedBlogItems },
  ] as const;

  const activeItems =
    activeNav === "home"
      ? homeItems
      : activeNav === "projects"
      ? projectItems
      : activeNav === "blog"
      ? formattedBlogItems
      : [];

  const handleMouseEnter = (key: "home" | "projects" | "blog") => {
    if (leaveTimeout.current) {
      clearTimeout(leaveTimeout.current);
      leaveTimeout.current = null;
    }
    setActiveNav(key);
  };

  const handleMouseLeave = () => {
    leaveTimeout.current = setTimeout(() => {
      setActiveNav(null);
    }, 150);
  };

  return (
    <nav
      className="nav-web"
      onMouseLeave={handleMouseLeave}
    >
      <Link href="/">
        <CpuIcon />
      </Link>

      {/* Top Navigation Links */}
      {navLinks.map((nav) => (
        <div
          key={nav.key}
          className="nav-web-item relative h-full flex items-center"
          onMouseEnter={() => handleMouseEnter(nav.key)}
        >
          <Link
            href={nav.href}
            className={currentPath === nav.href ? "nav-dropDown-item-active" : ""}
          >
            {nav.label}
          </Link>
        </div>
      ))}

      {/* Blur Overlay */}
      <AnimatePresence>
        {activeNav && (
          <motion.div
            key="blur-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full h-screen bg-black/10 backdrop-blur-sm z-[-10]"
            onMouseEnter={handleMouseLeave}
          />
        )}
      </AnimatePresence>

      {/* Dropdown Container */}
      <AnimatePresence>
        {activeNav && (
          <motion.div
            key="dropdown-container"
            layout
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-[rgb(244,244,246)] dark:bg-[rgb(9,9,10)] shadow-md dark:shadow-gray-700 overflow-hidden flex flex-col pl-12"
            onMouseEnter={() => {
              if (leaveTimeout.current) {
                clearTimeout(leaveTimeout.current);
                leaveTimeout.current = null;
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeNav} // triggers animation when switching tabs
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-start"
              >
                {activeItems.map((item, index) => (
                  <Link
                    key={`${activeNav}-${index}`}
                    href={item.href}
                    className={`nav-dropDown-item w-full text-left ${item.padding || ""}`}
                    // We can keep the hover effect from CSS class nav-dropDown-item
                    style={{ opacity: 1 }} // Override default opacity:0 from CSS class if needed, or remove opacity from CSS
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}