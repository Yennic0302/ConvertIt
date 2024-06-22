"use server";

export async function convertToPDF(data: FormData) {
  const files = Array.from(data.values());
  for (let file of files) {
    console.log(file);
  }
}
