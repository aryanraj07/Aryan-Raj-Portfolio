// import prisma from "@/lib/prisma";
// import bcrypt from "bcryptjs";

// async function main() {
//   const hashedPassword = await bcrypt.hash("admin123", 10);
//   await prisma.user.upsert({
//     where: {
//       email: "aryanraj010010@gmail.com",
//     },
//     update: {},
//     create: {
//       email: "aryanraj010010@gmail.com",
//       password: hashedPassword,
//       role: "ADMIN",
//     },
//   });
// }
// main()
//   .then(() => {
//     console.log("Admin created");
//   })
//   .catch(console.error);
