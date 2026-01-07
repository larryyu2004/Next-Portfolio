import { NextResponse } from "next/server";
import { buildMarkdownTree } from "@/lib/buildMarkdownTree";

export async function GET() {
  try {
    const tree = buildMarkdownTree();
    return NextResponse.json({ tree });
  } catch (error) {
    console.error("Error fetching blog categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
