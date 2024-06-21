"use client";

import PDFIcon from "@/icons/PDFIcon";
import { useFileStore } from "@/zustand/store";

export default function ConvertFilesButton({ message }: { message: string }) {
  const files = useFileStore((state) => state.addFiles);
  return (
    <form className="py-6 flex justify-center items-center">
      <label
        className="flex px-12 py-6 bg-red-600 rounded-lg cursor-pointer gap-2 items-center text-xl"
        htmlFor="files-converter"
      >
        {message} <PDFIcon style="size-12" />
      </label>
      <input id="files-converter" type="submit" hidden />
    </form>
  );
}
