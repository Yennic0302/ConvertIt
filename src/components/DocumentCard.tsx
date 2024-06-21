import WordIcon from "@/icons/WordIcon";

export default function DocumentCard({ name }: { name: string }) {
  return (
    <article className=" bg-blue-600 rounded-md flex p-2  h-min flex-col w-full max-w-[10rem]  ">
      <div className="w-full h-full flex  justify-center py-4">
        <WordIcon style="size-28 content-center" />
      </div>
      <p className="text-sm truncate">{name}</p>
    </article>
  );
}
