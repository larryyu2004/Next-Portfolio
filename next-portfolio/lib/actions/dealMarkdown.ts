// import prisma from "@/lib/db";

// export default async function dealMarkdown () {
//     const markdowns = await prisma.markdown.findMany();
//     type NestedStructure = Record<
//       string,
//       Record<string, Record<string, {title: string, slug: string }[]>>
//     >;
  
  
//     const structedData = markdowns.reduce((acc: NestedStructure, markdown) => {
//       const { category, secondCategory, thirdCategory, title, slug } = markdown;
//       if (!acc[category]) {
//         acc[category] = {};
//       }
//       if (!acc[category][secondCategory]) {
//         acc[category][secondCategory] = {};
//       }
//       if (!acc[category][secondCategory][thirdCategory]) {
//         acc[category][secondCategory][thirdCategory] = [];
//       }
//       acc[category][secondCategory][thirdCategory].push({ title, slug });
//       console.log(acc);
//       return acc;
//     }, {} as NestedStructure);
    
//     return structedData;
// }