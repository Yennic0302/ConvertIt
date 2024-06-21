"use client";

import FilesConverter from "@/components/FilesConverter";
import UploadFilesSection from "@/components/UploadFilesSection";
import { useFileStore } from "@/zustand/store";
export default function Home() {
  const files = useFileStore((state) => state.files);
  return (
    <main className="flex flex-col items-center justify-between ">
      {files ? <FilesConverter /> : <UploadFilesSection />}
    </main>
  );
}
