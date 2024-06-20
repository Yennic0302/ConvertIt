"use client";

import WordIcon from "@/icons/WordIcon";
import { useFileStore } from "@/zustand/store";

export default function UploadFilesButton({ message }: { message: string }) {
  const addFiles = useFileStore((state) => state.addFiles);

  const readFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    const filesArray: File[] | null = new Array<File>();
    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList.item(i);
        if (file) filesArray.push(file);
      }
    }
    if (filesArray != null) {
      addFiles(filesArray);
    }
  };

  return (
    <div className="py-6">
      <label
        className="flex px-12 py-6 bg-blue-600 rounded-lg cursor-pointer gap-2 items-center text-xl"
        htmlFor="files-selector"
      >
        {message} <WordIcon />
      </label>
      <input
        onChange={readFiles}
        id="files-selector"
        multiple
        type="file"
        accept=".doc, .docx"
        hidden
      />
    </div>
  );
}
