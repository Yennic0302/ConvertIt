import UploadFilesButton from "./UploadFilesButton";

export default function UploadFilesSection() {
  return (
    <section className="flex flex-col items-center justify-center py-28">
      <article className="flex flex-col text-center gap-12 items-center justify-center max-w-[80%] ">
        <h1 className="text-4xl font-bold">Convertir archivos WORD a PDF</h1>
        <p className="text-lg">
          Convierte tus documentos WORD a PDF con la máxima calidad y
          eficiencia.
        </p>
        <div>
          <UploadFilesButton message="Agregar archivos" />
          <p className="text-gray-400">o arrastra aqui tus archivos</p>
        </div>
      </article>
    </section>
  );
}
