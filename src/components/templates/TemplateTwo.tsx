export default function TemplateTwo({ data }: any) {
  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold uppercase">
        {data.name || "Your Name"}
      </h2>

      <p className="italic">{data.title}</p>

      <p className="mt-4 text-gray-700">{data.summary}</p>

      <p className="mt-6 text-sm">{data.email}</p>
    </div>
  );
}
