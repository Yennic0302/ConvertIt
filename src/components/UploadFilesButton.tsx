"use client";

import WordIcon from "@/icons/WordIcon";
import { useFileStore } from "@/zustand/store";

export default function UploadFilesButton({ message }: { message: string }) {
  const addFiles = useFileStore((state) => state.addFiles);

  const readFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      // ES6
      const filesArray: File[] = Array.from(fileList);
      addFiles(filesArray);

      // ES5
      //const filesArray: File[] | null = new Array<File>();
      // for (let i = 0; i < fileList.length; i++) {
      //   const file = fileList.item(i);
      //   if (file) filesArray.push(file);
      // }
      //addFiles(filesArray)
    }
  };

  return (
    <div className="py-6 flex justify-center items-center">
      <label
        className="flex px-12 py-6 bg-blue-600 rounded-lg cursor-pointer gap-2 items-center text-xl"
        htmlFor="files-selector"
      >
        {message} <WordIcon style="size-12" />
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
