// "use server";

// import prisma from "@/lib/db";

// export const createMarkdown = async (formData: FormData) => {
//   const title = formData.get("title") as string;
//   const category = formData.get("category") as string;
//   const secondCategory = formData.get("secondCategory") as string;
//   const thirdCategory = formData.get("thirdCategory") as string;

//   const slug = `${title}`
//     .toLowerCase()
//     .replace(/\s+/g, "-")
//     .replace(/[^a-z0-9-/]/g, "");
    

//   await prisma.markdown.create({
//     data: {
//       title,
//       slug,
//       category,
//       secondCategory,
//       thirdCategory,
//     },
//   });

// };
