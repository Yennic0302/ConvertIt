"use client";

export default function UploadFilesButton({ message }: { message: string }) {
  return (
    <div className="py-6">
      <label
        className="px-12 py-6 bg-blue-600 rounded-lg cursor-pointer"
        htmlFor="files-selector"
      >
        {message}
      </label>
      <input id="files-selector" type="file" hidden />
    </div>
  );
}
