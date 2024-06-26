import { useFileStore } from "@/zustand/store";
import ConvertFilesButton from "./ConvertFilesButton";
import DocumentCard from "./DocumentCard";

export default function FilesConverter() {
  const files = useFileStore((state) => state.files);

  return (
    <section className="flex items-center justify-center w-full h-[90vh]">
      <div className="flex gap-4 flex-wrap justify-center items-center p-16 h-full overflow-auto w-full">
        {files?.map((file, index) => (
          <DocumentCard key={index} name={file.name} />
        ))}
      </div>
      <aside className="min-w-[20rem] mx-10">
        <h1>Word a pdf</h1>
        <ConvertFilesButton message="Convertir a PDF" />
      </aside>
    </section>
  );
}
